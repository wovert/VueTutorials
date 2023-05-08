<script  lang="ts">
import { defineComponent } from 'vue'
import HomeList from './components/homeList.vue'
import { useI18n } from 'vue-i18n'
import { IRoomListParams } from '@/api/interface'

export default defineComponent({
  components: {
    HomeList
  },
  setup() {
    const { t } = useI18n()
    return { t }
  },
  asyncData({ store, route }: any) {
    console.log('asyncData----', store, route)
    const { pageNo } = store.state
    return store.dispatch('getRoomList', { pageNo } as IRoomListParams)
  }
})

</script>

<template>
  <div class="home-page">
    <!-- banner -->
    <div class="banner"></div>
    <!-- 房屋列表 -->
    <div class="main-wapper">
      <h2 class="title">{{ t('home.h2Title') }}</h2>
      <p class="sub-title">{{ t('home.subTitle') }}</p>
      <!-- 首页列表 -->
      <HomeList />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/home/index.scss";
</style>
