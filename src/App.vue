<template>
  <div id="app">
    <!--     <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <form action="http://www.baidu.com" target="_blank">
      <my-button @click="del" bunType="button">提交</my-button>
     
    </form> -->
    <my-banner :images="images"></my-banner>
  </div>
</template>

<script>
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Button from "./components/button";
import Confirm from "./components/confirm";
import Banner from "./components/banner";

Vue.use(Button);
Vue.use(Confirm);
Vue.use(Banner);

import Mock from "./mock";
import { setTimeout } from "timers";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      images: []
    };
  },
  created() {
    // 测试异步(这样会导致子组件中的ｃｒｅａｔｅｄ拿不到值，需要使ｗａｔｃｈ监听)
    setTimeout(() => {
      this.images = [
        { image: require("./assets/banner.webp") },
        { image: require("./assets/banner1.webp") },
        { image: require("./assets/banner2.webp") }
      ];
    }, 300);

    // $.get("/getbyid?id=717543066348683268",(resp)=>{
    //   console.log(resp)
    // })

    // 测试ｍｏｃｋ拦截调用，注意上面需要引入ｍｏｃｋjs
    // $.get("api/news", resp => {
    //   console.log(resp);
    // });

    // $.post("/api/login", { username: "小明", password: "123456" }, resp => {
    //   console.log(resp);
    // });
  },
  methods: {
    del(payload) {
      // alert(payload);
      this.$confirm("点击删除", [
        {
          text: "取消",
          onPress: () => {
            console.log("取消");
          }
        },
        {
          text: "确认",
          onPress: () => {
            console.log("确认");
          }
        }
      ]);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
