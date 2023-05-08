<script setup lang="ts">
import { useStore } from '@/store'
import Pagination from '@/components/common/pagination.vue'
import HomeTabs from './homeTabs.vue'
import { IRoomListParams } from '@/api/interface'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
function toDetail(item: any) {
  const { id } = item
  router.push({ path: `/roomDetail/${id}` })
  store.commit('setRoomId', id)
  console.log(item)
}
function changePage(pageNo: number) {
  console.log('父组件', pageNo)
  store.dispatch('getRoomList', { pageNo } as IRoomListParams)
}
</script>

<template>
  <!-- 城市筛选 -->
  <HomeTabs />
  <!-- 首页列表数据 -->
  <div>
    <div class="home-list">
      <div
        class="item"
        @click="toDetail(item)"
        v-for="(item, index) in store.state.roomList"
        :key="index"
      >
        <img :src="item.pictureUrl" :alt="item.title" />
        <p class="title">{{ item.title }}</p>
        <p class="price">¥{{ item.price }}元</p>
      </div>
    </div>
  </div>

  <!-- 分页 -->
  <Pagination @changePage="changePage" />
</template>

<style scoped>
</style>
