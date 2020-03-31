import "url-search-params-polyfill" //让ie兼容这个URLSearchParams
import Vue from 'vue'
import app from './App.vue'
import router from './router'
Vue.config.productionTip = false


// 

new Vue({
  router,
  render: h => h(app),
}).$mount('#app')
