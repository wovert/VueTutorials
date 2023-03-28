<template>
  <h1>Loign</h1>
  <!-- <router-link to="/home">回首页</router-link> -->
  <el-button @click="goHome">回首页</el-button>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router=  useRouter()
const goHome = () => {
  router.push('/welcome')
}
</script>

<style scoped>
</style>