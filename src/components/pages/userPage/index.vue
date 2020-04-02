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
    /**
     * 在渲染组件对应的路由被comfirm前调用，不能获取组件实例this
     * 因为当前守卫执行前，组件实例还没有被创建
     */
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