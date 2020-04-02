<template>
  <div>
    <input type="text" placeholder="请输入用户名" v-model="username">
    <br/>
    <input type="text" placeholder="请输入密码" v-model="password">
    <button @click="login">登录</button>
  </div>
</template>
<script>
import { request } from "../../../assets/js/util/request";
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      request(
        "http://192.168.1.16:9100/user/setloginname/bywxid?id=123&loginName=" +
          this.loginName,
        "post"
      ).then(resp => {
        console.log(resp);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>