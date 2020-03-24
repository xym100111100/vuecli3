<template>
  <button @click="del('删除')" :type="bunType">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
  props: {
    bunType: {
      type: String,
      default: "button",
      required: true
    }
  },
  methods: {
    del(payload) {
      this.$emit("click",payload);
    }
  }
};
</script>

<style scoped >
.btn {
  background: red;
  font-size: 20px;
  color: white;
}
</style>