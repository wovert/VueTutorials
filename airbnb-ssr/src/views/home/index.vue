<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
// import { ElMessage } from 'element-plus'
import { reactive, h, ref, getCurrentInstance } from 'vue'
import { fetchRoomList, fetchPersons } from '../../api'
import IndexedDB from '../../utils/indexedDB'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

console.log('t=', t)

const router = useRouter()
const route = useRoute()

console.log(route.params)

// 上下文
const { proxy }: any = getCurrentInstance()


const OtherMessage = reactive(
  {
    'today': t('message.today')
  }
)
// ElMessage({
proxy.$message({
  message: h('p', null, [
    h('span', null, 'Message canbe '),
    h('i', { style: 'color: teal' }, 'VNode'),
  ]),
})



const size = ref<'default' | 'large' | 'small'>('default')

const value1 = ref('')
const value2 = ref('')


// console.log(t('OtherMessage.today'))
// t('message.home')
// t(`footer['${itemInner.name}']`) 
const shortcuts = [
  {
    text: OtherMessage.today,
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now()
}

// // db
// const db = new IndexedDB('airbnb', 2)
// const storeName = 'person'
// db.openStore(storeName, 'id', [
//   'name', 'age'
// ])

// // add/update
// function addData(storeName: string) {
//   db.updateItem(storeName, {
//     name: 'Alice',
//     age: 18
//   })
// }

// function updateData(storeName: string) {
//   db.updateItem(storeName, {
//     id: 1,
//     name: 'Alice Modify',
//     age: 30
//   })
// }

// function deleteData(storeName: string, key: number) {
//   db.deleteItem(storeName, key)
// }

// function getDatas(storeName: string) {
//   db.getItems(storeName)
// }

// function getData(storeName: string, key: number | string) {
//   db.getItem(storeName, key)
// }
//////////////////////////////


// 真实接口
const getRoomList = () => {
  fetchRoomList().then(res => {
    console.log('getRoomList=', res)
  })
}
getRoomList()

// Mock 接口
// function getPersons() {
//   fetchPersons().then(res => {
//     console.log('getPersons=', res)
//   })
// }
// getPersons()
</script>

<template>
  <div> 
    <h1>{{ t('message.home') }}</h1>
    <!-- <el-button @click="addData(storeName)">Add</el-button>
    <el-button @click="updateData(storeName)">Modify</el-button>
    <el-button @click="deleteData(storeName, 2)">删除</el-button>
    <el-button @click="getDatas(storeName)">查询所有数据</el-button>
    <el-button @click="getData(storeName, 3)">查询一条数据</el-button> -->
    <br>
    <el-button @click="()=>router.push({path: '/my', query: {id: 1}})">{{ t('message.my') }}</el-button>
    <p class="text">{{ t('message.today') }}------爱丽丝的客服就卡死经济ask的风景按实际的接口阿喀琉斯的房间案件上的飞机啊是酒店房间阿里山的房间可拉斯基的反馈吉安卡罗士大夫艰苦了按时间打卡练腹肌</p>
  </div>
  <el-radio-group v-model="size" label="size control" size="small">
    <el-radio-button label="large">large</el-radio-button>
    <el-radio-button label="default">default</el-radio-button>
    <el-radio-button label="small">small</el-radio-button>
  </el-radio-group>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">Default</span>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a day"
        :size="size"
      />
    </div>
    <div class="block">
      <span class="demonstration">Picker with quick options</span>
      <el-date-picker
        v-model="value2"
        type="date"
        placeholder="Pick a day"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
        :size="size"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/home/index.scss"
</style>
