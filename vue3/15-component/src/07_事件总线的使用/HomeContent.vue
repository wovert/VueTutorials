<template>
  <div>
    <h2>HomeContent</h2>
  </div>
</template>

<script>
  import emitter from './utils/eventbus'

  export default {
    created() {
      emitter.on("why", (info) => {
        console.log("why:", info)
      });

      emitter.on("kobe", (info) => {
        console.log("kobe:", info)
      });

      emitter.on("*", (type, info) => {
        console.log("* listener:", type, info)
      })

      // 取消监听
      // emitter.all.clear() // 取消所有监听
      // emitter.off('name', fn )
    }
  }
</script>

<style scoped>

</style>