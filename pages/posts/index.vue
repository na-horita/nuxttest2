<template>
  <section class="container posts-page">
      <div slot="header" class="clearfix">
        <h1>{{ msg }}</h1>
        <postList :posts="posts"></postList>
      </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import postList from "~/components/posts/postList";

export default {
  components: {
    postList
  },
  data() {
    return {
      msg: "記事一覧"
    };
  },
  created() {
    this.$store.dispatch("posts/posts");
  },
  computed: {
    ...mapGetters("posts", ["posts"])
  }
};
</script>
