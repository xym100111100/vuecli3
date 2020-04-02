<template>
  <div>
    <p>个人中心,欢迎{{username}}</p>
    <button @click="loginout">安全退出</button>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      username: localStorage["username"]
    };
  },
  methods: {
    loginout() {
      localStorage.clear();
      this.$router.push("/");
    }
  },
  beforeRouteEnter(to, from, next) {
    if (Boolean(localStorage["isLogin"])) {
      next();
    } else {
      next("/login");
    }
  }
};
</script>

<style>
</style>