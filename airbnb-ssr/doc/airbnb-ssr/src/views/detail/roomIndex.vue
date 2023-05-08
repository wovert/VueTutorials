<script  lang="ts">
import { defineComponent, watch, watchEffect,onBeforeUpdate } from 'vue'
import RoomDetail from './components/detail.vue'
import { IRoomDetailParams } from '@/api/interface'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    RoomDetail
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const store = useStore()

    console.log('setup--------router', router)
    // watch(() => route.params, (newVal, oldVal) => {
    //   store.dispatch('getRoomDetail', newVal)
    // })
    onBeforeUpdate(() => { // DOM更新前调用接口，asyncData并不起作用，这里也可以使用onUpdated钩子
      watchEffect(() => store.dispatch('getRoomDetail', route.params))
      store.commit('setOrderVisible', false) // 若点击popover跳转至详情页面则关闭popover
    })
    
  },
  asyncData({ store, route }: any) {
    console.log('asyncData----详情页', store, route.value)
    store.commit('setOrderVisible', false) // 若点击popover跳转至详情页面则关闭popover
    const { roomId } = store.state
    const { id } = route.value.params
    console.log('roomId----------', roomId)
    // const { pageNo } = store.state
    return store.dispatch('getRoomDetail', { id: roomId || id } as IRoomDetailParams)
  }
})
</script>

<template>
  <RoomDetail />
</template>

<style lang='scss'>
@import "@/assets/scss/detail/index.scss";
</style>
