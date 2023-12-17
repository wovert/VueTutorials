<template>
  <h2 class="title">App</h2>
  <hello-world></hello-world>
</template>

<script>
  import HelloWorld from './HelloWorld'

  export default {
    components: {
      HelloWorld
    }
  }
</script>

<style scoped>
  h2 {
    color: red;
  }

  .title {
    color: blue;
  }
</style>