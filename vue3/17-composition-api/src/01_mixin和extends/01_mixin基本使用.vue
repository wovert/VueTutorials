<template>
  <div>
    <h2>{{message}}</h2>
    <h3>{{title}}</h3>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
  import { demoMixin } from './mixins/demoMixin'

  export default {
    mixins: [demoMixin],
    data() {
      return {
        title: "组件标题"
      }
    },
    created() {
      console.log("----------base created------------", new Date().getTime())
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>