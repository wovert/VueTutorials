<template>
  <div>
    About组件
    <button @click="counter++">{{counter}}</button>
  </div>
</template>

<script>
  export default {
    name: "about",  
    data() {
      return {
        counter: 0
      }
    },
    created() {
      console.log("about created")
    },
    unmounted() {
      console.log("about unmounted")
    },
    // 缓存组件声明周期：进入
    activated() {
      console.log("about activated")
    },
    // 缓存组件声明周期：离开
    deactivated() {
      console.log("about deactivated")
    }
  }
</script>

<style scoped>

</style>