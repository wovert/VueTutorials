<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
console.log(route.query)
</script>

<template>
    个人中心
    <button @click="() => router.push({ name: 'home', params: { id: 2 } })">跳转到首页</button>
</template>

<style>
</style>
