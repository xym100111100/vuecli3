<template>
  <div>
    <div class="classsfy-scroll" ref="classsfy-scroll">
      <ul>
        <li>小明同学1</li>
        <li>小明同学2</li>
        <li>小明同学3</li>
        <li>小明同学4</li>
        <li>小明同学5</li>
        <li>小明同学6</li>
        <li>小明同学7</li>
        <li>小明同学3</li>
        <li>小明同学4</li>
        <li>小明同学5</li>
        <li>小明同学6</li>
        <li>小明同学7</li>
        <li>小明同学3</li>
        <li>小明同学4</li>
        <li>小明同学5</li>
        <li>小明同学6</li>
        <li>小明同学7</li>
        <li>小明同学3</li>
        <li>小明同学4</li>
        <li>小明同学5</li>
        <li>小明同学6</li>
        <li>小明同学7</li>
        <li>小明同学3</li>
        <li>小明同学4</li>
        <li>小明同学5</li>
        <li>小明同学6</li>
        <li>小明同学7</li>
        <li>小明同学3</li>
        <li>小明同学4</li>
        <li>小明同学5</li>
        <li>小明同学6</li>
        <li>小明同学7</li>
      </ul>
    </div>
    <div class="x" ref="x">
      <ul>
        <li>小明同学1</li>
        <li>小明同学2</li>
        <li>小明同学3</li>
        <li>小明同学4</li>
        <li>小明同学5</li>
        <li>小明同学6</li>
        <li>小明同学7</li>
        <li>小明同学3</li>
        <li>小明同学4</li>
        <li>小明同学5</li>
        <li>小明同学6</li>
        <li>小明同学7</li>
        <li>小明同学3</li>
        <li>小明同学4</li>
        <li>小明同学5</li>
        <li>小明同学6</li>
        <li>小明同学7</li>
        <li>小明同学3</li>
        <li>小明同学4</li>
        <li>小明同学5</li>
        <li>小明同学6</li>
        <li>小明同学7</li>
        <li>小明同学3</li>
        <li>小明同学4</li>
        <li>小明同学5</li>
        <li>小明同学6</li>
        <li>小明同学7</li>
        <li>小明同学3</li>
        <li>小明同学4</li>
        <li>小明同学5</li>
        <li>小明同学6</li>
        <li>小明同学7</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "scroll",
  mounted() {
    // 使用这个之后会明显顺畅地多
    new BScroll(this.$refs["classsfy-scroll"], {
      scrollY: true,
      click: true
    });
    new BScroll(this.$refs["x"], {
      scrollX: true,
      click: true
    });
  }
};
</script>

<style>
.classsfy-scroll {
  height: 400px;
  overflow: hidden;
}
.x {
  width: 300px;
  overflow: hidden;
  height: 500px;
}
.x ul{
  white-space: nowrap;
  height: 200px;
  width: 1000px;
}
.x  li{
   display: inline-block;
}
</style>