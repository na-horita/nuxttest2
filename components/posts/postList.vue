<template>
  <transition name="fade" mode="out-in">
    <div v-if="posts">
      <ul id="postswrap">
        <li v-for="(post,index) in posts" :key="index">
          <p><v-btn color="info" small v-for="(category,catindex) in post.categories" :key="catindex">{{ category }}</v-btn></p>
          <h4><a :href="post.url">{{ post.title }}</a></h4>
          <p>{{ post.body }}<nuxt-link :to="'/posts/'+index">修正</nuxt-link></p></li>
      </ul>
    </div>
  </transition>
</template>
<script type="text/javascript">
export default {
  props: ["posts"],
  data() {
    return {};
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

#postswrap {
  list-style-type: none;
}

#postswrap li {
  border-top: 1px dotted #333;
}
</style>