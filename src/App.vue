<template>
  <div id="app">
    <!--     <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <form action="http://www.baidu.com" target="_blank">
      <my-button @click="del" bunType="button">提交</my-button>
     
    </form> -->
    <!-- <my-banner :images="images"></my-banner> -->
    <form id="form">
      <input name="uploadFile" type="file" accept="image/x-png,image/gif,image/jpeg,image/bmp" ref="head-file">
      <input name="uploadFile2" type="file" accept="image/x-png,image/gif,image/jpeg,image/bmp" ref="head-file">

      <!-- accept 表示接收的文件类型，优化筛选速度和防止错误  -->
      <input name="name" @change="uploadHead" 　value="ddd" ref="head-file">

    </form>
  </div>
</template> 

<script>
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Button from "./components/button";
import Confirm from "./components/confirm";
import Banner from "./components/banner";
import axios from "axios";

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
    // setTimeout(() => {
    //   this.images = [
    //     { image: require("./assets/banner.webp") },
    //     { image: require("./assets/banner1.webp") },
    //     { image: require("./assets/banner2.webp") }
    //   ];
    // }, 300);
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
    // axios
    //   .get("http://192.168.1.16:9100/suc/org/getbyid?id=517928358546243584")
    //   .then(resp => {
    //     console.log(resp);
    //   });
  },
  methods: {
    uploadHead(e) {
      /* 初始化一个FormData对象，这样可以获取到ｆｏｒｍ中的值 */
      let form = document.getElementById("form");
      let data = new FormData(form);
      data.append("payload", data);

      // console.log(e.target.files[0]) 这样也能拿到文件对象，需要注意的是如果调用方法的地方有参数，那么第一个参数应该叫$event
      // let headFile = this.$refs["head-file"];
      // let data = new FormData();
      // console.log(headFile)
      // data.append("uploadFile", headFile);
      // console.log(process.env.VUE_APP_API + ":20180/ise/upload");
      axios
        .post(process.env.VUE_APP_API + ":20180/ise/upload", data)
        .then(resp => {
          console.log(resp);
        });
    },
    del(payload) {
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
