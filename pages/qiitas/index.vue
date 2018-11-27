<template>
  <div>
    <h1>qiitaからタグ「vuex」の記事情報一覧を取得。。。</h1>
    <ul>
      <li v-for="qiita in qiitas" :key="qiita.id">
        <h4><a :href="qiita.url">{{ qiita.title }}</a></h4>
      </li>
    </ul>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  async asyncData({ store }) {
    await store.dispatch("qiitas/qiitasActi");
  },
  computed: {
    ...mapGetters("qiitas", ["qiitas"])
  }
};
</script>