<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import zhCn from 'element-plus/lib/locale/lang/zh-cn'
// import en from 'element-plus/lib/locale/lang/en'
// import { ref } from 'vue'
// import { useI18n } from 'vue-i18n'
import commonHeader from './components/layout/commonHeader.vue'
import commonFooter from './components/layout/commonFooter.vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'

const store = useStore()
const route = useRoute()
// const { locale: localeLanguage } = useI18n()
// const locale = ref(zhCn)
// const changeLang = (language: any) => {
//   locale.value = language
//   localeLanguage.value = language.name
//   console.log('language：', language)
// }
</script>

<template>
  <el-config-provider :locale="store.state.locale">
    <!-- 头部 -->
    <commonHeader v-show="route.fullPath.indexOf('login') === -1" />
    <!-- 主体 -->
    <div class="container">
      <router-view />
    </div>
    <!-- 底部 -->
    <commonFooter v-show="route.fullPath.indexOf('login') === -1" />
  </el-config-provider>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
