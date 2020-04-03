<template>
  <div style="width:600px">

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">  <!-- prop是用來检测的标示，这个和rules中的属性名不对的话将不会校验 -->
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>

      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>

    </el-form>

  </div>
</template>
<script>
import { request } from "../../../assets/js/util/request";
import axios from "axios";
import Vue from "vue";
import { Input, FormItem, Form, Button } from "element-ui";
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Form);
Vue.use(Button);
// import Mock from "../../../mock";
import { mapActions } from "vuex";

export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        // 监听字段
        username: "",
        password: "",
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        username: [
          // 一个规则一个规则地验证，成功了才走下一个，例如这里成功了上面两个才走第三个
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
          { validator: this.checkedUserName, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
          { validator: this.checkedPassword, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    ...mapActions({
      doLogin: "user/doLogin"
    }),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid);
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    login() {
      // if (this.username.match(/^\s*$/)) {
      //   alert("请输入用户名");
      //   return;
      // }
      // if (this.password.match(/^\s*$/)) {
      //   alert("请输入密码");
      //   return;
      // }
      // this.doLogin({
      //   wxOpenid: "o_dhX1VVvCO6Crq2ErO6H-ikBU4w1",
      //   success: resp => {
      //     console.log("登录结果:", resp);
      //     if (resp === 200) {
      //       this.$router.go(-1);
      //     }
      //   }
      // });
      // request("/api/login", "post", {
      //   username: "小明",
      //   password: "123456"
      // }).then(resp => {
      //   console.log(resp);
      //   if (resp.status === 200) {
      //     localStorage["name"] = resp.data.result.username;
      //     localStorage["password"] = resp.data.result.password;
      //     localStorage["isLogin"] = true;
      //     this.$router.go(-1);
      //   }
      // });
      // axios
      //   .post("/api/login", { username: "小明", password: "123456" })
      //   .then(resp => {
      //     console.log(resp);
      //   });
    },
    checkedUserName(rule, value, callback) {
      console.log(rule, value);
      callback();
    },
    checkedPassword(rule, value, callback) {
      console.log(rule, value);
      callback();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>