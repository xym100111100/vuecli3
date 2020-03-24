import Confirm from './confirm'

export default {

   // 这个confirms是页面使用的标签名字
   // 这个Confirms是页面Vue.use()使用的
   install(Vue) {
      let ConfirmObj = Vue.extend(Confirm);
      // Vue.component("my-confirm", Confirm)
      Vue.prototype.$confirm = function (msg, btns) {
         let ConfirmInit = new ConfirmObj().$mount(document.createElement("div"))
         console.log(ConfirmInit)
         document.body.appendChild(ConfirmInit.$el);
         ConfirmInit.msg = msg
         if (btns && btns.length > 0) {
            // 代码应该经常考虑这种严谨
            ConfirmInit.btns = btns
         }
         //console.log(msg, btns)
      }
   }
}