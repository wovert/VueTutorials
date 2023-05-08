<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
// import { ElMessage } from 'element-plus'
import { h, getCurrentInstance } from 'vue'
import { fetchRoomList } from '../../api'

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

const getRoomList = () => {
  fetchRoomList()
}
getRoomList()
</script>

<template>
  <div> 
    <h1>首页</h1>
    <el-button @click="()=>router.push({path: '/my', query: {id: 1}})">我的</el-button>
    <p class="text">爱丽丝的客服就卡死经济ask的风景按实际的接口阿喀琉斯的房间案件上的飞机啊是酒店房间阿里山的房间可拉斯基的反馈吉安卡罗士大夫艰苦了按时间打卡练腹肌</p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/home/index.scss"
</style>
