import "url-search-params-polyfill" //让ie兼容这个URLSearchParams
import Vue from 'vue'
import app from './App.vue'
import router from './router'
import Vuex from 'vuex'
Vue.config.productionTip = false

Vue.use(Vuex)
let INC_TOTAL = "INC_TOTAL";
let DEC_TOTAL = "DEC_TOTAL";


let store = new Vuex.Store({
  state: { // 初始化数据
    total: 0,
    users: [
      { name: '小明', age: 8 },
      { name: '中明', age: 18 },
      { name: '大明', age: 28 },
    ]
  },
  mutations: {// 同步操作方法
    [INC_TOTAL](state, payload) {
      console.log(payload)
      state.total = payload.total;
    },
    [DEC_TOTAL](state, payload) {
      state.total = payload.total;
    }
  },
  actions: {// 异步操作，用于操作mutations里面的方法，如果mutations方法操作量大最好写在action里面
    incTotal(context, payload) {
      context.commit(INC_TOTAL, payload)
    },
    decTotal(context, payload) {
      //DEC_TOTAL 可能会报错，报错的话使用 ""+DEC_TOTAL+""

      context.commit(DEC_TOTAL, payload)
    }

  },
  getters: { // 有时候我们需要从store中派生出一些状态来， 例如对列表进行过滤。 
    getUsers(state) {
      let users = state.users.filter((item) => {
        return item.age >= 18
      })
      return users;
    }

  }
})


new Vue({
  store,
  router,
  render: h => h(app),
}).$mount('#app')
