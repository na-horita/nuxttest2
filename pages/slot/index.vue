<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="sTimeOut()">セットタイムアウトのボタン</button><span v-if="sto">{{sto}}</span>
    <list-profile>
      <p v-if="age !== null" slot="age">{{age}}歳</p>
      <p slot="gender">{{gender}}</p>
    </list-profile>
    一番の金額は{{topmoney}}円
    <li v-for="(list,index) in lists" :key="index">{{list.name}}({{moneyCalc(list)}}円)</li>
    <div id="peare"></div>
</div>
</template>

<script>
import jquery from "jquery";
import Lodash from "Lodash";
import { mapGetters } from "vuex";
import ListProfile from "~/components/ListProfile.vue";

export default {
  components: {
    ListProfile
  },
  data() {
    return {
      sto: false,
      msg: "slot勉強ページ",
      jquery: "jqueryだぞ",
      age: 35,
      gender: "男性",
      lists: [
        { name: "taro", money: 100 },
        { name: "jiro", money: 200 },
        { name: "saburo", money: 520 }
      ]
    };
  },
  methods: {
    moneyCalc: function(list) {
      return list.money + 2000;
    },
    sTimeOut() {
      let that = this;
      _.delay(
        function() {
          that.sto = !that.sto;
          //console.log(3333)
        },
        500,
        "later"
      );
    }
  },
  computed: {
    // topmoney: function() {
    //   var topmoney = this.lists.reduce(function(a, b) {
    //     return a > b.money ? a : b.money;
    //   }, 0);
    //   return topmoney;
    // }
    topmoney: function() {
      var _this01 = this;
      var topmoney = _.reduce(
        _this01.lists,
        function(a, b) {
          return a > b.money ? a : b.money;
        },
        0
      );
      return topmoney;
    }
  },
  mounted() {
    jquery("#peare").text(this.jquery);
  }
};
</script>