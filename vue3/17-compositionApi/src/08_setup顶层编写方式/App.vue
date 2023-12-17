<template>
  <div>
    <h2>当前计数: {{counter}}</h2>
    <button @click="increment">+1</button>

    <hello-world message="呵呵呵" @increment="getCounter" @decrement="delCounter"></hello-world>
  </div>
</template>

<!-- script setup 实验性阶段 -->
<script setup>
  import { ref } from 'vue'
  import HelloWorld from './HelloWorld'

  const counter = ref(0)
  const increment = () => counter.value++

  const getCounter = (payload) => {
    console.log('getCounter=', payload)
    counter.value += parseInt(payload)
  }
  const delCounter = (payload) => {
    console.log('delCounter=', payload)
    counter.value -= parseInt(payload)
  }
</script>

<style scoped>

</style>