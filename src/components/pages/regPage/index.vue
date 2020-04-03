<template>
    <div>
        用户名字
        <input placeholder="请输入账号" v-model="username" />
        <br/> 用户密码
        <input placeholder="请输入密码" v-model="password">
        <br/>
        <input  @click="sheetVisible = !sheetVisible" placeholder="请输入性别" readonly  :value="sex" />
        <br/>
        <button @click="submite">提交</button><br/>
        <button @click="del">刪除</button>

        <div>
            <mt-actionsheet :actions="actions" v-model="sheetVisible">
            </mt-actionsheet>
        </div>
    </div>

</template>
<script>
import Vue from "vue";
import { Toast, MessageBox, Actionsheet } from "mint-ui";
Vue.component(Actionsheet.name, Actionsheet);
//　一定要使用这种方式不能使用Vue.use(Actionsheet)
let toast = Toast; // 这里是为了可能有时候会有没反应。

export default {
  name: "reg",
  data() {
    return {
      username: "",
      password: "",
      sheetVisible: false,
      sex: "",
      actions: [
        {
          name: "男",
          method: item => {
            console.log(item);
            this.sex = item.name;
          }
        },
        {
          name: "女",
          method: item => {
            console.log(item);
            this.sex = item.name;
          }
        }
      ]
    };
  },
  methods: {
    submite() {
      if (this.username.match(/^\s*$/)) {
        toast("请输入用户名");
        return;
      }
      if (this.password.match(/^\s*$/)) {
        toast("请输入密码");
        return;
      }
    },
    del() {
      MessageBox.confirm("确定执行此操作?").then(action => {});
    },
    show() {
      this.sheetVisible = true;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>