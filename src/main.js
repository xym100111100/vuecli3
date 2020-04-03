import "url-search-params-polyfill" //让ie兼容这个URLSearchParams
import Vue from 'vue'
import app from './App.vue'
import router from './router'
import store from './store'
import config from './assets/js/util/conf/conf'
Vue.config.productionTip = false


Vue.prototype.$config = config

new Vue({
  store,
  router,
  render: h => h(app),
}).$mount('#app')
