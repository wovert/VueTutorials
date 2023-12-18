<template>
  <App1 />
  <hr />
  <App2 />
  <hr />
  <App3 />
  
  <hr />
  <h2 v-format-time="'YYYY/MM/DD'">{{timestamp}}</h2>
  <h2 v-format-time>{{timestamp}}</h2>
  <h2 v-format-time>{{timestamp}}</h2>
  <h2 v-format-time>{{timestamp}}</h2>
  <h2 v-format-time>{{timestamp}}</h2>
  <h2 v-format-time>{{timestamp}}</h2>

  <hr />
</template>

<script>
  import App1 from './01_默认的实现.vue'
  import App2 from './02_局部自定义指令.vue'
  import App3 from './03_生命周期和参数-修饰符.vue'

  export default {
    components: {
      App1,
      App2,
      App3
    },
    setup() {
      // const timestamp = 1624452193
      const timestamp = new Date().getTime()

      return {
        timestamp
      }
    },
    mounted() {
      console.log("app mounted")
    }
  }
</script>

<style scoped>

</style>