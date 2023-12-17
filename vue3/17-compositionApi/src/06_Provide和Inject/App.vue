<template>
  <div>
    <home/>
    <h2>App Counter: {{counter}}</h2>
    <button @click="increment">App中的+1</button>
  </div>
</template>

<script>
  import { provide, ref, readonly } from 'vue'

  import Home from './Home'

  export default {
    components: {
      Home
    },
    setup() {
      const name = ref("coderwhy")
      let counter = ref(100)

      provide("name", readonly(name))
      provide("counter", readonly(counter))

      const increment = () => counter.value++

      return {
        increment,
        counter
      }
    }
  }
</script>

<style scoped>

</style>