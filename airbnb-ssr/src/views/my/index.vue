<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
console.log(route.query)
</script>

<template>
  <div> 
    <h1>我的</h1>

    <button @click="()=>router.push({name: 'home', params: {id: 2}})">首页</button>
  </div>
</template>

<style scoped>

</style>
