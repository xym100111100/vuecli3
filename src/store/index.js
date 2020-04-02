import Vuex from 'vuex'
import Vue from 'vue'
import user from './modules/user'
import counter from './modules/counter'
import cart from './modules/cart'


Vue.use(Vuex)


let store = new Vuex.Store({
   modules: {
      counter,  // 这里还可以counter2:counter 命名，取的时候使用counter2这样取
      user,
      cart
   }

})


export default store