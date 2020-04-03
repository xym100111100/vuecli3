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
// import Mock from "../../../mock";
import { mapActions } from "vuex";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions({
      doLogin: "user/doLogin"
    }),
    login() {
      if (this.username.match(/^\s*$/)) {
        alert("请输入用户名");
        return;
      }
      if (this.password.match(/^\s*$/)) {
        alert("请输入密码");
        return;
      }
      this.doLogin({
        wxOpenid: "o_dhX1VVvCO6Crq2ErO6H-ikBU4w1",
        success: resp => {
          console.log("登录结果:", resp);
          if (resp === 200) {
            this.$router.go(-1);
          }
        }
      });
      // request("/api/login", "post", {
      //   username: "小明",
      //   password: "123456"
      // }).then(resp => {
      //   console.log(resp);
      //   if (resp.status === 200) {
      //     localStorage["name"] = resp.data.result.username;
      //     localStorage["password"] = resp.data.result.password;
      //     localStorage["isLogin"] = true;
      //     this.$router.go(-1);
      //   }
      // });

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