<template>
  <section class="container">
      <div slot="header" class="clearfix">
        <h2 v-if="isLoggedIn">ログインしてます。<span v-if="user">【{{ user }}】さん</span></h2>
        <h2 v-else="isLoggedIn">ログイン無。</h2>
      </div>
      <form>
        <div class="form-content">
          <span></span>
        <v-text-field
          label="ユーザーID"
          v-model="formData.id"
        ></v-text-field>
        </div>

        <v-btn color="success" @click="register()">新規ID作成</v-btn>
        <!-- <v-btn color="success" @click="handleClickSubmit">{{ buttonText }}</v-btn> -->
      </form>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  asyncData() {
    return {
      isCreateMode: false,
      formData: {
        id: null
      }
    };
  },
  computed: {
    ...mapGetters(["user", "isLoggedIn"])
  },
  methods: {
    async register() {
      await this.$store.dispatch("register", { formData });
      //this.$router.push("/posts/");
    }
  }
};
</script>
