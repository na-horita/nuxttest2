<template>
  <section class="container posts-page">
      <div slot="header" class="clearfix">
        <time>{{ msg }}</time>
        
        <v-text-field
          label="ユーザーID"
          v-model="payload.id"
        ></v-text-field>
        </div>

        <v-btn color="success" @click="register()">新規ID作成</v-btn>
        <transition name="fade" mode="out-in">
          <div v-if="users">
          <h2>usersId一覧</h2>
            <ul>
              <li v-for="us in users" :key="us.id">{{ us.id }}</li>
            </ul>
          </div>
        </transition>

  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      msg: "新しくユーザを追加することができます",
      payload: { id: null }
    };
  },
  methods: {
    async add() {
      await this.$axios.$post("/users.json", this.payload);
      this.users = await this.$axios.$get("/users.json");
      this.payload.id = null;
    },
    async register() {
      await this.$store.dispatch("users/register", this.payload);
      this.payload.id = null;
      //this.$router.push("/posts/");
    }
  },
  // async created() {
  //   this.users = await this.$axios.$get("/users.json");
  // },
  computed: {
    ...mapGetters("users", ["users"])
  }
  // async mounted() {
  //   await this.$axios.$post("/users.json", this.payload);
  //   this.users = await this.$axios.$get("/users.json");
  // }
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