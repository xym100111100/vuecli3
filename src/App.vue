<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <form action="http://www.baidu.com" target="_blank">
      <my-button @click="del" bunType="button">提交</my-button>
      <!-- <my-confirm bunType="button">提交</my-confirm> -->
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Button from "./components/button";
import Confirm from "./components/confirm";

Vue.use(Button);
Vue.use(Confirm);

export default {
  name: "App",
  components: {
    HelloWorld
  },
  created() {
    console.log(process.env);
  },
  methods: {
    del(payload) {
     // alert(payload);
      this.$confirm("点击删除", [
        {
          text: "取消",
          onPress: () => {
            console.log("取消");
          }
        },
        {
          text:"确认",
          onPress:()=>{
            console.log("确认")
          }
        }
      ]);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
