<template>
  <div>
    <button @click="increment">{{counter}}</button>
  </div>
</template>

<script>
  import { onMounted, onUpdated, onUnmounted, ref } from 'vue'

  export default {
    setup() {
      const counter = ref(0)
      const increment = () => counter.value++

      onMounted(() => {
        console.log("App Mounted1=" + new Date().getTime())
      })
      onMounted(() => {
        console.log("App Mounted2=" + new Date().getTime())
      })
      onUpdated(() => {
        console.log("App onUpdated=" + new Date().getTime())
      })
      onUnmounted(() => {
        console.log("App onUnmounted=" + new Date().getTime())
      })

      return {
        counter,
        increment
      }
    }
  }
</script>

<style scoped>

</style>