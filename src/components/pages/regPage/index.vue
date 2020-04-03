<template>
  <div>
    用户名字
    <input placeholder="请输入账号" v-model="username" />
    <br />用户密码
    <input :type="checked?'text':'password'" placeholder="请输入密码" v-model="password" />
    <br />
    <input @click="sheetVisible = !sheetVisible" placeholder="请输入性别" readonly :value="sex" />
    <br />
    <button @click="submite">提交</button>
    <br />
    <button @click="del">刪除</button>

    <div>
      <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    </div>
    <div>
      <van-switch v-model="checked" active-color="#07c160" inactive-color="#ee0a24" />
    </div>
    <div>
      <button :close-on-click-action="true" @click="vantShow = !vantShow">显示vant</button>
      <van-action-sheet v-model="vantShow" :actions="vantActions" @select="onSelect" />
    </div>
    <div>
      <button @click="popupShow = !popupShow">弹出vant-popup</button>
      <van-popup v-model="popupShow" position="bottom" :style="{ height: '30%' }">
        <van-area :area-list="areaList" />
      </van-popup>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Toast, MessageBox, Actionsheet } from "mint-ui";
import AreaList from "../../../assets/data/vant-data/";
import {
  Switch,
  Toast as VantToast,
  ActionSheet as VantActionSheet,
  Area,
  Popup
} from "vant";
Vue.component(Actionsheet.name, Actionsheet);
Vue.use(Switch);
Vue.use(VantToast);
Vue.use(VantActionSheet);
Vue.use(Area);
Vue.use(Popup);

//　一定要使用这种方式不能使用Vue.use(Actionsheet)
let toast = Toast; // 这里是为了可能有时候会有没反应。

export default {
  name: "reg",
  data() {
    return {
      popupShow: false,
      areaList: AreaList,
      checked: true,
      username: "",
      password: "",
      sheetVisible: false,
      sex: "",
      vantShow: false,
      vantActions: [
        { name: "选项" },
        { name: "选项" },
        { name: "选项", subname: "描述信息" }
      ],
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
  created() {
    console.log(AreaList);
  },
  methods: {
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.vantShow = false;
      VantToast(item.name);
    },
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
      VantToast({
        message: "删除",
        onClose: () => {
          console.log("sss");
        }
      });

      // MessageBox.confirm("确定执行此操作?").then(action => {});
    },
    show() {
      this.sheetVisible = true;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>