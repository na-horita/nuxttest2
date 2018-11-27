<template>
  <div>
    <h1>{{msg}}</h1>
    <transition-group tag="ul" name="fade">
<!--     <li v-for="(list,index) in lists" :key="list.name">{{list.name}}({{list.money}}円)<a href="#" @click.prevent="dele(index)">削除</a></li>
 -->    <li v-for="(list,index) in sortedList" :key="list.name">{{list.name}}({{list.money}}円)<a href="#" @click.prevent="dele(index)">削除</a></li>
	</transition-group>
	<a href="#" @click.prevent="order= !order">シャッフルする</a>
</div>
</template>

<script>
import Lodash from "Lodash";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      msg: "transition勉強ページ",
      lists: [
        { name: "taro", money: 100 },
        { name: "jiro", money: 200 },
        { name: "saburo", money: 520 },
        { name: "yoburo", money: 920 },
        { name: "goburo", money: 720 },
        { name: "nanaburo", money: 320 }
      ],
      order:false
    };
  },
  methods: {
  	dele(index){
  		this.lists.splice(index,1)
  	},
  },
  computed: {
  	sortedList:function(){
  		return _.orderBy(this.lists,'money',this.order?'desc':'asc')
  	}
  }
};
</script>

<style>
.fade-move,
.fade-enter-active,
.fade-leave-active {
    -webkit-transition: all .8s ease;
    transition: all .8s ease;
    opacity: 1;
}

.fade-enter,
.fade-leave-active,
.fade-leave {
    opacity: 0;
}

</style>