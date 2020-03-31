<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      progressVal: 0   
    };
  }
};
</script>

<style>
  @import "./assets/css/common/public.css"
</style>
