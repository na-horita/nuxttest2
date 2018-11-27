<template>
  <section class="container posts-page">
      <div slot="header" class="clearfix">
        <h1>{{ msg }}</h1>
        
        <v-text-field label="タイトル" data-vv-as="【タイトル】" v-validate.initial="'required'" name="title" v-model="payload.title"></v-text-field>
        <span style="color:red;" v-if="errors.has('title')">{{ errors.first('title') }}</span>

        <v-text-field label="リンクURL" data-vv-as="【リンクURL】" v-validate.initial="'required'" name="url" v-model="payload.url"></v-text-field>
        <span style="color:red;" v-if="errors.has('url')">{{ errors.first('url') }}</span>

      </div>
      <br><br>
           <p>セレクト欄</p>
      <multiselect :selected="selected" :options="options" :multiple="true" @update="updateSelected" v-model="payload.categories" placeholder="カテゴリー選択"></multiselect >
      <br><br>
      </div>

        <v-textarea label="説明文" data-vv-as="【説明文】" v-validate.initial="'required'" name="body" v-model="payload.body"></v-textarea>
        <span style="color:red;" v-if="errors.has('body')">{{ errors.first('body') }}</span>

        </div><br><br>
        <v-btn color="success" @click="addPost()">新規ポスト作成</v-btn>
        <hr>
        <h4>「postsCategories」をcomputedで加工</h4>
        <ul>
          <li v-for="(option,index) in options" :key="index">{{ option }}</li>
        </ul>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Multiselect from "vue-multiselect";
export default {
  components: { Multiselect },
  data() {
    return {
      msg: "新規記事",
      payload: {},
      selected: null
    };
  },
  methods: {
    async addPost() {
      await this.$store.dispatch("posts/addPost", { ...this.payload });
      this.payload = new Array();
      this.$router.push("/posts/");
    },
    updateSelected(newSelected) {
      this.selected = newSelected;
    }
  },
  created() {
    this.$store.dispatch("posts/postsCategories");
  },
  computed: {
    options() {
      let options = [];
      const cat = this.$store.state.posts.postsCategories;
      //console.log(cat);
      for (var value in cat) {
        //console.log(value);
        options.push(cat[value].name);
      }
      return options;
    },
    ...mapGetters("posts", ["postsCategories"])
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
  opacity: 1;
}
.fade-enter,
.fade-leave-active,
.fade-leave {
  opacity: 0;
}
</style>