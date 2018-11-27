<template>
  <v-app light>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: "apps", title: "Welcome", to: "/" },
        { icon: "bubble_chart", title: "qiita vuex", to: "/qiitas" },
        { icon: "bubble_chart", title: "users", to: "/users" },
        { icon: "bubble_chart", title: "posts", to: "/posts" },
        { icon: "bubble_chart", title: "posts/add", to: "/posts/add" },
        {
          icon: "bubble_chart",
          title: "posts/addcategory",
          to: "/posts/addcategory"
        },
        { icon: "bubble_chart", title: "validate", to: "/validate" },
        { icon: "bubble_chart", title: "glide", to: "/glide" },
        { icon: "bubble_chart", title: "authed", to: "/authed" }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>

<style>
body {
  background-color: rgba(10, 10, 10, 0.7);
}
</style>
