//import { INC_TOTAL, DEC_TOTAL } from './mutation-types'
import * as types from './mutation-types'
export default {
   namespaced: true,
   state: { // 初始化数据
      total: 0,

   },
   mutations: {// 同步操作方法
      [types.INC_TOTAL](state, payload) {
         console.log(payload)
         state.total = payload.total;
      },
      [types.DEC_TOTAL](state, payload) {
         state.total = payload.total;
      }
   },
   actions: {// 异步操作，用于操作mutations里面的方法，如果mutations方法操作量大最好写在action里面
      incTotal(context, payload) {
         context.commit(types.INC_TOTAL, payload)
      },
      decTotal(context, payload) {
         //DEC_TOTAL 可能会报错，报错的话使用 ""+DEC_TOTAL+""

         context.commit(types.DEC_TOTAL, payload)
      }

   },
}