<template>
  <div class="app">
    <div><button @click="isShow = !isShow">显示/隐藏</button></div>

    <transition @enter="enter"
                @leave="leave"
                :css="false"> <!--忽略CSS动画-->
      <h2 class="title" v-if="isShow">gasp动画</h2>
    </transition>
  </div>
</template>

<script>
  import gsap from 'gsap';

  export default {
    data() {
      return {
        isShow: true,
        x: 300
      }
    },
    methods: {
      enter(el, done) {
        console.log("enter");
        gsap.from(el, {
          scale: 0,
          x: this.x,
          onComplete: done // 需要 done回调，否则将会被同步调用，过度会立即完成
        })
      },
      leave(el, done) {
        console.log("leave");
        gsap.to(el, {
          scale: 0,
          x: this.x,
          onComplete: done
        })
      }
    }
  }
</script>

<style scoped>
  .title {
    display: inline-block;
  }
</style>