<template>
  <div v-if="isShow" class="mask">
    <div class="confim-warp">
      <div class="message">{{msg}}</div>
      <div class="handle">
        <div
          class="btn"
          @click="handleBtn(index)"
          v-for="(item,index) in btns"
          :key="index"
        >{{item.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-confirms",
  data() {
    return {
      msg: "",
      btns: [],
      isShow: true
    };
  },
  methods: {
    handleBtn(index) {
      if (this.btns[index].onPress) {
        this.btns[index].onPress;
      }
      this.isShow = false;
    }
  }
};
</script>

<style scoped >
.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  z-index: 99;
}
.confim-warp {
  width: 20%;
  height: 16%;
  background-color: white;
  position: absolute;
  left: 40%;
  top: 30%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.message {
 
  padding-top: 20px;
  text-align: center;
}
.handle {
  display: flex;
  justify-content: space-around;
  padding-bottom: 30px;
}
.btn {
  cursor: pointer;
  width: 200px;
  height: 80px;
  line-height: 80px;
}
.btn:last-child{
       color: red;
}
</style>