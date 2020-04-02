<template>
  <div>
    <input type="text" placeholder="请输入用户名" v-model="username" />
    <br />
    <input type="text" placeholder="请输入密码" v-model="password" />
    <button @click="login">登录</button>
  </div>
</template>
<script>
import { request } from "../../../assets/js/util/request";
import axios from "axios";
import Mock from "../../../mock";
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
      if (this.username.match(/^\s*$/)) {
        alert("请输入用户名");
        return;
      }
      if (this.password.match(/^\s*$/)) {
        alert("请输入密码");
        return;
      }

      request("/api/login", "post", {
        username: "小明",
        password: "123456"
      }).then(resp => {
        console.log(resp);
        if (resp.status === 200) {
          localStorage["username"] = resp.data.result.username;
          localStorage["password"] = resp.data.result.password;
          localStorage["isLogin"] = true;
          this.$router.go(-1)
        }
      });

      // axios
      //   .post("/api/login", { username: "小明", password: "123456" })
      //   .then(resp => {
      //     console.log(resp);
      //   });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>