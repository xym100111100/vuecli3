import "url-search-params-polyfill" //让ie兼容这个URLSearchParams
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 

new Vue({
  render: h => h(App),
}).$mount('#app')
