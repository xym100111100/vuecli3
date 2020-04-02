import "url-search-params-polyfill" //让ie兼容这个URLSearchParams
import Vue from 'vue'
import app from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false




new Vue({
  store,
  router,
  render: h => h(app),
}).$mount('#app')
