let modules = {
   namespaced: true,
   state: {
      users: [
         { name: '小明', age: 8 },
         { name: '中明', age: 18 },
         { name: '大明', age: 28 },
      ]
   },
   getters: { // 有时候我们需要从store中派生出一些状态来， 例如对列表进行过滤。 
      getUsers(state) {
         let users = state.users.filter((item) => {
            return item.age >= 18
         })
         return users;
      }

   }
}

export default modules