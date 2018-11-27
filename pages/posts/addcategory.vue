<template>
  <section class="container posts-page">
      <div slot="header" class="clearfix">
        <h1>{{ msg }}</h1>
        <v-text-field label="カテゴリー名" data-vv-as="【カテゴリー名】" v-validate.initial="'required'" name="name" v-model="payload.name"></v-text-field>
        <span style="color:red;" v-if="errors.has('name')">{{ errors.first('name') }}</span>

        <v-text-field label="スラッグ名（英語表記）" data-vv-as="【スラッグ名】" v-validate.initial="'required'" name="slug" v-model="payload.slug"></v-text-field>
        <span style="color:red;" v-if="errors.has('slug')">{{ errors.first('slug') }}</span>
<br><br>
        <v-btn color="success" @click="addPostsCategory()">新規ポストカテゴリー作成</v-btn>
      </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      msg: "新規記事",
      payload: {}
    };
  },
  methods: {
    async addPostsCategory() {
      await this.$store.dispatch("posts/addPostsCategory", { ...this.payload });
      this.payload = new Array();
      //this.$router.push("/posts/");
    }
  },
  computed: {
    ...mapGetters("posts", ["posts"])
  }
};
</script>

<style>
</style>