<template>
    <div>
        <!-- 这里是测试下面使用this.$router.replace才能在点击下面的选项之后正确返回的。 -->
        <button @click="$router.go(-1)" >返回</button>
        <ul>
            <!-- 注意这里的 /goods/good　需要有斜杠，否则会根据当前路由拼接上去-->
            <li @click="goPage('/goods/good')">商品</li>
            <li @click="goPage('/goods/details')">详情</li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
  name: "goods",
  data() {
    return {};
  },
  methods: {
    goPage(url) {
      console.log(url);
      // this.$router.push(url);
      this.$router.replace(url);
    }

  }
};
</script>
<style lang="scss" scoped>
</style>