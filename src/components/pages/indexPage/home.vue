<template>
  <div>
    <ul>
      <li>
        <router-link to="/news">新闻页面1</router-link><br/>
        <router-link to="/news">新闻页面2</router-link><br/>
        <router-link to="/goods">商品页面</router-link><br/>
      </li>
      <li @click="goNews">新闻页面3</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goNews() {
      // 这里使用params传接受的地方就要使用params接受,query同理，但params刷新页面就不见了。
      //this.$router.push({name:"news",params:{id:123,name:'猫咪'}})
      //this.$router.push({path:'/news',query:{id:123,name:'猫咪'}})
      // 这种使用方式是最多的，而且刷新页面还在
      this.$router.push("news?id=123456&name=徐亚明");
    }
  }
};
</script>

<style>
</style>