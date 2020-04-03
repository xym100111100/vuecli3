import "url-search-params-polyfill" //让ie兼容这个URLSearchParams
import Vue from 'vue'
import app from './App.vue'
import router from './router'
import store from './store'
import config from './assets/js/util/conf/conf'
import VueI18n from 'vue-i18n'
Vue.config.productionTip = false
Vue.use(VueI18n)

let i18n = new VueI18n({
  //locale:'cn', // 与下面cn同名，这里相当与默认中文
  locale: sessionStorage["local"] ? sessionStorage["local"] : 'cn',
  messages: {
    'cn': require("./assets/locales/cn"),
    'en': require("./assets/locales/en")
  }
})

Vue.prototype.$config = config

new Vue({
  i18n,
  store,
  router,
  render: h => h(app),
}).$mount('#app')
