<template>
  <div class="example">
    <div class="mm">
      <input type="text" v-model="msg">{{msg}}<button @click="mmChange()">ボタン</button>
      <h3 class="tit_mm" ref="mm">タイトルエムエム</h3>
      <p>テキスト入力入力入力入力入力入力</p>
    </div>

    <div class="tabs">
      <TabItem
        v-for="item in list"
        v-bind="item" :key="item.id"
        v-model="currentId"/>
    </div>
    <div class="contents">
      <transition>
        <section class="item" :key="currentId">
          {{ current.content }}
        </section>
      </transition>
    </div>
  </div>
</template>

<script>
import TabItem from "~/components/TabItem.vue";
export default {
  components: { TabItem },
  data() {
    return {
      msg: "メッセージ",
      currentId: 1,
      list: [
        { id: 1, label: "Tab1", content: "コンテンツ1" },
        { id: 2, label: "Tab2", content: "コンテンツ2" },
        { id: 3, label: "Tab3", content: "コンテンツ3" }
      ]
    };
  },
  computed: {
    current() {
      return this.list.find(el => el.id === this.currentId) || {};
    }
  },
  // mounted() {
  //   let mm = this.$refs.mm;
  //   //console.log(mm);
  //   mm.innerText = "成功";
  //   // return;
  // }
  methods: {
    mmChange() {
      let mm = this.$refs.mm;
      mm.innerText = this.msg;
    }
  }
};
</script>

<style scoped>
.contents {
  position: relative;
  overflow: hidden;
  width: 280px;
  border: 2px solid #000;
}
.item {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  transition: all 0.8s ease;
}

.v-leave-active {
  position: absolute;
}
.v-enter {
  transform: translateX(-100%);
}
.v-leave-to {
  transform: translateX(100%);
}
</style>
