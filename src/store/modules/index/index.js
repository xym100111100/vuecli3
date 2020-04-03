import { getNavData } from '../../../api/index'
export default {
   namespaced: true,
   state: {
      navs: []
   },
   mutations: {
      ["SET_NAV"](state, payload) {
         console.log(payload)
         state.navs = payload
      }
   },
   actions: {
      getNavs(conText) {
         getNavData().then(resp => {
            if (resp.status === 200 && resp.data) {
               conText.commit('SET_NAV', resp.data.list)
            }
         })
      }
   }
}