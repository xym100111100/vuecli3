<template>
  <div id="app">
    <button @click="utilRequestForAxiosGet">登录</button>
    <button @click="updateUserName">修改用户名字</button>
    <input type="file" ref="file" @change="uploadFile" />
    <div class="progress-warp">
      <div class="progress" :style="{width:progressVal+'%'}"></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { request } from "./assets/js/util/http";

export default {
  name: "App",
  components: {},
  data() {
    return {
      progressVal: 0
    };
  },
  created() {},
  methods: {
    utilRequestForAxiosGet() {
      request({
        url: "suc/user",
        method: "get",
        wxOpenid: "o_dhX1VVvCO6Crq2ErO6H-ikBU4w1"
      }).then(resp => {
        console.log(resp);
      });
    },
    updateUserName() {
      request({
        url: "http://192.168.8.106:9750/suc/user/user-login",
        method: "post",
        wxOpenid: "o_dhX1VVvCO6Crq2ErO6H-ikBU4w1"
      }).then(resp => {
        console.log(resp);
      });
    },
    uploadFile() {
      var config = {
        onUploadProgress: progressEvent => {
          var percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          console.log(percentCompleted);
          this.progressVal = percentCompleted;
        }
      };
      // 使用扩展运算符需要使用这些符号
      // console.log({...config})
      // console.log([...config])
      let data = new FormData();
      data.append("file", this.$refs["file"].files[0]);
      request({
        url: "http://192.168.8.106:20180/ise/uploads",
        method: "post",
        data: data,
        ...config
      }).then(resp => {
        console.log(resp);
      });


      
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
