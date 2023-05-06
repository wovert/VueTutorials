<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
// import { ElMessage } from 'element-plus'
import { h, getCurrentInstance } from 'vue'

const router = useRouter()
const route = useRoute()

console.log(route.params)

// 上下文
const { proxy }: any = getCurrentInstance()

// ElMessage({
proxy.$message({
  message: h('p', null, [
    h('span', null, 'Message canbe '),
    h('i', { style: 'color: teal' }, 'VNode'),
  ]),
})
</script>

<template>
  <div> 
    <h1>首页</h1>
    <el-button @click="()=>router.push({path: '/my', query: {id: 1}})">我的</el-button>
  </div>
</template>

<style scoped>

</style>
