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
      计数器：{{$store.state.counter.total}}
      <button @click="incCount">+</button>
    </div>
    <div>
      <button @click="decCart">-</button>
      购物车： {{$store.state.cart.total}}
      <button @click="incCart">+</button>
    </div>
    <ul>
      <li v-for="(item,index) in users" :key="index">{{item.name}}{{item.ages}}</li>
    </ul>
    <ul>
      <li v-for="(item,index) in navs" :key="index">{{item.wxName}}{{item.schoolName}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import skip from "../skip";
import { INC_TOTAL, DEC_TOTAL } from "../../../store/modules/mutation-types";
export default {
  name: "Home",
  data() {
    return {
      num: 0,
      cartTotal: 0
    };
  },
  created() {
    // 使用命名空间之后这里就失效了。
     //this.getNavs();
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
      total: state => state.total,
      navs: state => state.index.navs
    }),
    // ...mapGetters(["getUsers"])  这里的值不能和data里面的冲突
    ...mapGetters({
      users: "user/getUsers"
    })
  },
  methods: {
    //  ...mapMutations(["INC_TOTAL", "DEC_TOTAL"]),
    ...mapMutations({
      INC_TOTAL: INC_TOTAL,
      DEC_TOTAL: DEC_TOTAL
    }),
    // ...mapActions(["counter/incTotal", "decTotal"]),
    ...mapActions({
      incTotal: "counter/incTotal",
      decTotal: "counter/decTotal",
      getNavs: "index/getNavs"
    }),

    incCount() {
      this.$store.commit("counter/INC_TOTAL", { total: ++this.num });
      // this.INC_TOTAL({ total: ++this.num });

      // 这个和action对应
      //this.$store.dispatch("incTotal", { total: ++this.num });
      // 这里也是action，不过要上面引入mapActions
      //  this.incTotal({ total: ++this.num });
    },
    decCount() {
      // this.$store.commit("counter/DEC_TOTAL", { total: --this.num });
      // this.DEC_TOTAL({ total: --this.num });

      // 这个和action对应
      this.$store.dispatch("counter/decTotal", { total: --this.num });
      // this.decTotal({ total: --this.num });
    },
    incCart() {
      this.$store.commit("cart/" + INC_TOTAL, { total: ++this.cartTotal });
    },
    decCart() {
      this.$store.commit("cart/" + DEC_TOTAL, { total: --this.cartTotal });
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