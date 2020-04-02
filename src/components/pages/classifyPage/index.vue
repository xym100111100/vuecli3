<template>
  <div>
    <ul>
      <li @click="goPage('/classsfy?id=1')">男装</li>
      <li @click="goPage('/classsfy?id=2')">女装</li>
    </ul>
    <div class="box" v-show="isShow" @click="closeBox">X</div>
  </div>
</template>
<style  scoped>
.box {
  height: 300px;
  text-align: center;
  width: 300px;
  line-height: 300px;
  background: red;
}
</style>
<script>
export default {
  name: "classsfy",
  data() {
    return {
      isShow: true
    };
  },
  methods: {
    goPage(url) {
      // this.$router.replace("/skip");
      // 使用这种方式的的react和vue都可以使用来扑捉到路由参数发生变化，不过vue一般都是使用下面的方法
      // setTimeout(() => {
      this.$router.replace(url);
      // }, 100);
    },
    closeBox() {
      this.isShow = false;
    }
  },
  created() {
    // console.log(this.$route.query);
    // this.count = 0;
    // this.timer = setInterval(() => {
    //   ++this.count;
    //   console.log(this.count);
    // }, 1000);
  },
  beforeRouteUpdate(to, from, next) {
    //这个垃圾方法还是垃圾vsCoode居然不提示
    /**
     * 当前路由被改变，但是组件复用时被调用，可以访问到this
     */
    console.log(to);
  },
  beforeRouteLeave(to, from, next) {
      /**
       * 页面离开的时候清楚定时器，不过一般使用destroyed来处理,
       * 还有离开的时候比如说存储数据到vuex或者是session里面
       */
    //   clearInterval(this.timer);
    //   next();

    // 让用户保存某些数据再关闭窗口
    if (this.isShow) {
      alert("请关闭窗口");
    } else {
      next();
    }
  },
  destroyed() {
    clearInterval(this.timer);
  }
};
</script>

<style>
</style>