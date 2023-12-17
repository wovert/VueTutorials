<template>
  <h2>MultiRootElement</h2>
  <h2>MultiRootElement</h2>

  <!-- 多个根节点的attribute没有显示的绑定，会出现警告，必须手动指定要绑定的那一个属性上 -->
  <h2 :id="$attrs.id">显示父组件传递的对象id属性值={{ $attrs.id }}, </h2>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>