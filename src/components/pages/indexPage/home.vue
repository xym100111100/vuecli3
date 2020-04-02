<template>
  <div>
    <ul>
      <li>
        <router-link to="/news">新闻页面</router-link>
        <br />
        <router-link to="/goods">商品页面</router-link>
        <br />
        <router-link to="/login">会员登录</router-link>
        <br />
        <router-link to="/user">个人中心</router-link>
        <br />
        <router-link to="/classsfy">商品列表</router-link>
        <br />
      </li>
      <li @click="goNews">新闻页面3</li>
    </ul>
    <div>
      <skip></skip>
      <button @click="decCount">-</button>
      {{total}}
      <button @click="incCount">+</button>
    </div>
    <ul>
      <li v-for="(item,index) in users" :key="index">{{item.name}}{{item.ages}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import skip from "../skip";
export default {
  name: "Home",
  data() {
    return {
      num: 0
    };
  },
  created() {
    console.log(this.$store.getters.getUsers);
  },
  components: {
    skip
  },
  computed: {
    // ...mapState(["total"])
    // ...mapState({
    //   total:"total"
    // })
    ...mapState({
      total: state => state.total
    }),
    // ...mapGetters(["getUsers"])  这里的值不能和data里面的冲突
    ...mapGetters({
      users: "getUsers"
    })
  },
  methods: {
    //  ...mapMutations(["INC_TOTAL", "DEC_TOTAL"]),
    ...mapMutations({
      INC_TOTAL: "INC_TOTAL",
      DEC_TOTAL: "DEC_TOTAL"
    }),
    ...mapActions(["incTotal", "decTotal"]),
    incCount() {
      // this.$store.commit("INC_TOTAL", { total: ++this.num });
      // this.INC_TOTAL({ total: ++this.num });

      // 这个和action对应
      //this.$store.dispatch("incTotal", { total: ++this.num });
      // 这里也是action，不过要上面引入mapActions
      this.incTotal({ total: ++this.num });
    },
    decCount() {
      //this.$store.commit("DEC_TOTAL", { total: --this.num });
      // this.DEC_TOTAL({ total: --this.num });

      // 这个和action对应
      // this.$store.dispatch("decTotal", { total: --this.num });
      this.decTotal({ total: --this.num });
    },
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