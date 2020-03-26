<template>
  <div class="banner-wrap" @mouseover="stop" @mouseout="play">
    <transition-group name="banner">
      <div class="slide" v-for="(item,index)  in data " :key="index" v-show="item.checked" 　>
        <img :key="index" :src="item.image">
      </div>
    </transition-group>
    <div class="spot-wrap">
      <div @click="changeImg(index)" :class="{spot:true, active:item.checked} " v-for="(item,index)  in images " :key="index"></div>
    </div>

  </div>
</template>
<script>
export default {
  name: "banner_name",
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      data: []
    };
  },
  created() {
    this.index = 0;
    this.play();
  },
  destroyed() {
    // 页面离开的时候清除定时器
    this.stop();
  },
  methods: {
    play() {
      this.timer = setInterval(() => {
        if (this.index < this.data.length - 1) {
          this.index++;
        } else {
          this.index = 0;
        }

        this.changeImg(this.index);
      }, 2000);
    },
    stop() {
      clearTimeout(this.timer);
    },
    changeImg(index) {
      // 这里是为了和定时器同步，这样点击了第一个后定时器会从第一个走起
      this.index = index;
      if (this.data.length > 0) {
        for (let i = 0; i < this.data.length; i++) {
          // 这里可以提高性能，需要常用这种写法
          if (this.data[i].checked === true) {
            this.data[i].checked = false;
            break;
          }
        }
        this.data[index].checked = true;
        // 数组，索引，新值
        this.$set(this.data, index, this.data[index]);
      }
    }
  },
  watch: {
    images: {
      handler(val) {
        this.data = [...val]; //(es5方法val.concat()) 使用浅拷贝解决引用类型的问题，否则每次修改this.data都会修改images然后走这个方法就会造成每次都是第一个张图片
        for (let i = 0; i < this.data.length; i++) {
          if (i == 0) {
            this.data[i].checked = true;
          } else {
            this.data[i].checked = false;
          }
        }
      }
    }
  }
};
</script>
<style  scoped>
.banner-wrap {
  width: 100%;
  height: 500px;
  position: relative;
}
.banner-wrap .slide {
  width: 100%;
  height: 100%;
  position: absolute;
}

.banner-wrap .spot-wrap {
  width: auto;
  height: auto;
  position: absolute;
  left: 47%;
  bottom: 8%;
}

.banner-wrap .spot-wrap .spot {
  background-color: rgba(0, 0, 0, 0.6);
  height: 10px;
  width: 20px;
  display: inline-block;
  margin: 0 5px;
  cursor: pointer;
}
.banner-wrap .spot-wrap .active {
  background-color: rgba(255, 255, 255, 0.6);
}
.banner-enter-active,
.banner-leave-active {
  transition: 1s;
}
.banner-enter {
  opacity: 0;
}
.banner-enter-to {
  opacity: 1;
}
.banner-leave {
  opacity: 1;
}
.banner-leave-to {
  opacity: 0;
}
</style>