<template>
  <div class="contents">
    <transition name="fade" mode="out-in">
  <div class="page page--home">
    <h2>{{ msg }}。</h2>
      <ul>
        <li v-for="(post,index) in posts" :key="index">
            <h3><a :href="post.link" target="_blank">{{post.title.rendered}}</a></h3>
            <p><time>{{ kakou_posts[index] }}</time></p>
            <img :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url">
            <hr>
        </li>
    </ul>
  </div>
    </transition>
  </div><!--//contents -->
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import Lodash from "Lodash";

export default {
  data() {
    return {
      msg: "取得したjsonデータをcomputedで加工",
      posts: []
    };
  },
  created: function() {
    this.getPosts();
  },
  methods: {
    getPosts: function() {
      axios
        .get(
          "https://cooperativehouse.jp/wp-json/wp/v2/news/?_embed&per_page=7"
        )
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          window.alert(error);
        });
    }
  },
  computed: {
    //console.log(posts.length())
    kakou_posts: function() {
      const kakou_posts = [];
      _.forEach(
        this.posts,
        function(post) {
          let date = post.date;
          // momentjsによる整形
          date = this.$moment(date).format("YYYY年MM月DD日");
          kakou_posts.push(date);
        }.bind(this)
      );

      // for (var i = 0; i < this.posts.length; i++) {
      //   let date = this.posts[i].date;
      //   // momentjsによる整形
      //   date = this.$moment(date).format("YYYY年MM月DD日");
      //   kakou_posts.push(date);
      // }
      return kakou_posts;
    }
  }
};
</script>