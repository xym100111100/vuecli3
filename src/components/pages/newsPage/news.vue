<template>
  <div>
    <ul>新闻1</ul>
    <ul>新闻2</ul>
    <ul>新闻</ul>
    <div>
      <button @click="$router.go(-1)">返回</button>
    </div>
  </div>
</template> 

<script>
export default {
  name: "News",
  created() {
    
   // console.log(this.$route.params.id, this.$route.params.name);
    console.log(this.$route.query.id, this.$route.query.name);
  }
};
</script>

<style>
</style>