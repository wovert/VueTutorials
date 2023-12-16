<template>
  <h2 class="vue-title">{{ title }}</h2>
  <p>我是Vue渲染出来的</p>
  <hello-world></hello-world>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
export default {
  components: {
    HelloWorld    
  },
  data() {
    return {
      title: 'Vue渲染的标题'
    }
  },
  methods: {

  }
}
</script>

<style scoped>
    .vue-title {
        color: red;
        font-size: 30px;
    }
</style>