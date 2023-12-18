<template>
  <div>
    <h2>Category</h2>
    <p>{{ counter }}</p>
    <p><button @click="increment">+1</button></p>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const counter = ref(0)
      const increment = () => counter.value++
      return {
        counter,
        increment
      }
    }
  }
</script>

<style scoped>

</style>