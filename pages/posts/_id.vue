<template>
  <section class="container posts-page">
      <div slot="header" class="clearfix">
        <time>{{ posts[$route.params.id].title }}</time>
      </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      msg: "新しく気に入った記事を追加することができます",
      payload: {}
    };
  },
  methods: {
  },
  computed: {
    ...mapGetters("posts", ["posts"])
  }
};
</script>

