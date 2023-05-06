<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <el-button @click="()=>router.push({path: '/home'})">首页</el-button>
  <el-button @click="()=>router.push({path: '/my'})">我的</el-button>
  <router-link to='/home'>首页</router-link>
  <router-link to='/my'>我的</router-link>
  <router-view />
</template>

<style scoped>
</style>
