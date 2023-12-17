<template>
  <div>
    HomeContent: {{name}} - {{age}} - {{length.value}}
  </div>
</template>

<script>
  export default {
    // 子组件使用数据
    inject: ["name", "age", "length"]
  }
</script>

<style scoped>

</style>