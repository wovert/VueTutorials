<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
console.log(route.params)
</script>

<template>
  <div> 
    <h1>首页</h1>
    <button @click="()=>router.push({path: '/my', query: {id: 1}})">我的</button>
  </div>
</template>

<style scoped>

</style>
