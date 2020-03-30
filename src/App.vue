<template>
  <div id="app">
    <!--     <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <form action="http://www.baidu.com" target="_blank">
      <my-button @click="del" bunType="button">提交</my-button>
     
    </form>-->
    <!-- <my-banner :images="images"></my-banner> -->
    <form id="form">
      <input
        name="file"
        type="file"
        accept="image/x-png, image/gif, image/jpeg, image/bmp"
        ref="head-file"
        @change="utilRequestForAxiosUpload"
      />
      <input
        name="file"
        type="file"
        accept="image/x-png, image/gif, image/jpeg, image/bmp"
        ref="head-file2"
        @change="uploadHead2"
      />

      <!-- accept 表示接收的文件类型，优化筛选速度和防止错误  -->
      <input name="name" @change="uploadHead" 　value="ddd" />
    </form>
    <div class="progress-warp">
      <div class="progress" :style="{width:progressVal+'%'}"></div>
    </div>
    <button @click="utilRequestForAxiosLogin">登录</button>
  </div>
</template>

<script>
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Button from "./components/button";
import Confirm from "./components/confirm";
import Banner from "./components/banner";
import axios from "axios";
import { request } from "./assets/js/util/request";
Vue.use(Button);
Vue.use(Confirm);
Vue.use(Banner);

//  import Mock from "./mock";
//  在使用progress的地方时候用mock会有问题，
//  request.upload.addEventListener in not a function。
import { setTimeout } from "timers";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      images: [],
      username: "",
      progressVal: 0
    };
  },
  created() {
    // axios
    //   .get("http://192.168.8.106:9750/suc/love/get-by-id?id=661708632915836928")
    //   .then(resp => {
    //     console.log(resp);
    //   });
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
  },
  methods: {
    uploadHead() {
      let form = document.getElementById("form");
      let data = new FormData(form);
      // data.append("file", this.$refs["head-file"]);
      // data.append("file", this.$refs["head-file2"]);
      axios.post("http://127.0.0.1:20180/ise/uploads", data).then(resp => {
        console.log(resp);
      });
    },

    uploadHead2(e) {
      // 进度条,上面需要注释掉mock，否则会有request.upload.addEventListener in not a function。
      var config = {
        onUploadProgress: progressEvent => {
          var percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          console.log(percentCompleted);
          this.progressVal = percentCompleted;
        }
      };

      let data = new FormData();
      // 这样两个获取的都是文件对象
      // console.log(e.target.files[0]);
      // console.log(this.$refs["head-file2"].files[0]);
      // 这里可以复制一行出来，相同的key(file)的话将会以数组的形式传到后台，这样后台就能以数组的形式接收了。
      data.append("file", e.target.files[0]);
      axios
        .post("http://127.0.0.1:20180/ise/uploads", data, config)
        .then(resp => {
          console.log(resp);
        });
    },

    submit() {
      if (this.username.match(/^\s*$/)) {
        alert("请输入用户名");
        return;
      }

      /**
       * 测试发现两种参数格式后台都可以正确接受
       */
      /*    axios
        .put("http://192.168.8.106:9750/suc/user", {
          wxName: this.username,
          id: "661524748479627264"
        })
        .then(resp => {
          console.log(resp);
        });

      // 这个URLSearchParams 在ie上是有兼容性问题的，需要npm install url-search-params-polyfill --save
      // 在入口文件main.js(一定要第一行)
      const params = new URLSearchParams();
      params.append("wxName", this.username);
      params.append("id", "661524748479627264");
      axios
        .put("http://192.168.8.106:9750/suc/user", {
          wxName: this.username,
          id: "661524748479627264"
        })
        .then(resp => {
          console.log(resp);
        });
 */

      /**
       * 可以使用自定义配置新建一个 axios 实例
       */
      const instance = axios.create({
        baseURL: "http://192.168.8.106:9750",
        timeout: 1000
      });
      instance.get("/suc/love/get-by-id?id=661708632915836928").then(resp => {
        console.log(resp);
      });
    },
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
    },
    utilRequestForAxiosUpload() {
      var config = {
        onUploadProgress: progressEvent => {
          var percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          console.log(percentCompleted);
          this.progressVal = percentCompleted;
        }
      };
      //使用封装的axios方法请求之上传文件
      let url = process.env.VUE_APP_API + ":20180/ise/uploads";
      let data = new FormData();
      request(
        url,
        "file",
        { file: this.$refs["head-file"].files[0] },
        config
      ).then(resp => {
        console.log(resp);
      });
    },
    utilRequestForAxiosLogin() {
      //使用封装的axios方法请求之登录
      let url = process.env.VUE_APP_API + ":9750/suc/user/user-login";
      request(url, "post", { wxOpenid: "o_dhX1VVvCO6Crq2ErO6H-ikBU4w1" }).then(
        resp => {
          console.log(resp);
        }
      );
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
.progress-warp {
  width: 300px;
  height: 30px;
  border: solid 1px #666666;
}
.progress-warp .progress {
  width: 100%;
  height: 100%;
  background: blue;
}
</style>
