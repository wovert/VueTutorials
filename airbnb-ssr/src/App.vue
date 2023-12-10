<script setup lang="ts">
import { ref, computed, getCurrentInstance  } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import HeaderCommon from './components/layout/HeaderCommon.vue'
import FooterCommon from './components/layout/FooterCommon.vue'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import ko from 'element-plus/dist/locale/ko.mjs'

const router = useRouter() // js: router.push(path: {'/home'})
const route = useRoute() // 路由参数

// router.beforeEach(async (to, from, next) => {
//   const fullPath = to.fullPath
//   console.log('inner -----------fullPath=', fullPath)
//   to.fullPath = fullPath
// })

const { proxy } = getCurrentInstance()

// proxy.$router.push("/my02")
console.log('proxy.route.fullPath=', proxy.$route)
console.log('router=', router)
console.log('route=', route)
console.log('route.fullPath=', route.fullPath)
console.log('route.index=', !route.fullPath.indexOf('login'))


const key = computed(() => {
  return route.path + Math.random()
})

// // element-plus 国际化
const locale = ref(zhCn)

// i18n国际化
const { locale: localLanguage, t } = useI18n()

const changeLang = (language: any) => {
  locale.value = language
  console.log('language:', language)
  localLanguage.value = language.name
}
</script>

<template>
  <!-- <el-config-provider :locale="zhCn"> -->
  <el-config-provider :locale="locale">
    <HeaderCommon v-show="!route.fullPath.indexOf('login')" @onChangeLang="changeLang" />
    <router-view :key="key" />
    <button @click="changeLang(zhCn)">中文</button>
    <button @click="changeLang(en)">英文</button>
    <button @click="changeLang(ko)">韩文</button>
    <br />
    <FooterCommon v-show="!route.fullPath.indexOf('login')" @onChangeLang="changeLang" />
    <!-- 
    <el-button @click="()=>router.push({path: '/home'})">{{ t('message.home')}}</el-button>
    <el-button @click="()=>router.push({path: '/my'})">{{ t('message.my')}}</el-button>
    <br /> -->

    <router-link to='/home'>首页</router-link>
    <router-link to='/my'>我的</router-link>
  </el-config-provider>
</template>

<style lang="scss" scoped>

</style>
