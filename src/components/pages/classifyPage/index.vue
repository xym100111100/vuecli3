<template>
  <div>
    <ul>
      <li @click="goPage('/classsfy?id=1')">男装</li>
      <li @click="goPage('/classsfy?id=2')">女装</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "classsfy",
  data() {
    return {};
  },
  methods: {
    goPage(url) {
      this.$router.replace(url);
    }
  },
  created() {
    console.log(this.$route.query);
  },
  beforeRouteUpdate(to, from, next) {
    //这个垃圾方法还是垃圾vsCoode居然不提示
    console.log(to);
    next();
  }
};
</script>

<style>
</style>