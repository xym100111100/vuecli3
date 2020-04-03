import { login } from '../../../api/user'

let modules = {
   namespaced: true,
   state: {
      users: [
         { name: '小明', age: 8 },
         { name: '中明', age: 18 },
         { name: '大明', age: 28 },
      ],
      id: localStorage["name"] ? localStorage["name"] : '',
      name: localStorage["name"] ? localStorage["name"] : '',
      isLogin: Boolean(localStorage["isLogin"]) ? Boolean(localStorage["isLogin"]) : false,
      authToken: localStorage["authToken"] ? localStorage["authToken"] : '',
   },
   getters: { // 有时候我们需要从store中派生出一些状态来， 例如对列表进行过滤。 
      getUsers(state) {
         let users = state.users.filter((item) => {
            return item.age >= 18
         })
         return users;
      }

   },
   mutations: {
      ["SET_USER"](state, payload) {
         state.id = payload.id;
         state.name = payload.wxName;
         state.isLogin = true;
         state.authToken = payload.wxOpenid
         localStorage["id"] = payload.id;
         localStorage["name"] = payload.wxName;
         localStorage["isLogin"] = true;
         localStorage["authToken"] = payload.wxOpenid;
         console.log(state)
      },
      ["OUT_LOGIN"](state) {
         state.id = "";
         state.name = "";
         state.isLogin = false;
         state.authToken = '';
         localStorage.removeItem("id");
         localStorage.removeItem("name");
         localStorage.removeItem("isLogin");
         localStorage.removeItem("authToken");
         /**
          * 这里切记，需要removeItem("isLogin"),不能设置成false，否则Boolean(localStorage["isLogin"]永远为true!!
          */
      }
   },
   actions: {
      doLogin(conText, payload) {
         login(payload).then((resp) => {
            if (resp.status === 200 && resp.data) {
               conText.commit('SET_USER', resp.data.sucUserMo)
               if (payload.success) {
                  payload.success(resp.status)
               }
            }

         })
      },
      loginOutUser(conText, payload) {
         conText.commit("OUT_LOGIN")
         if (payload.success) {
            payload.success(true)
         }
      }
   }
}

export default modules