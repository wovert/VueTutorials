<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import ko from 'element-plus/dist/locale/ko.mjs'
const router = useRouter()

// element-plus 国际化
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
    <button @click="changeLang(zhCn)">中文</button>
    <button @click="changeLang(en)">英文</button>
    <button @click="changeLang(ko)">韩文</button>
    <br />

    <el-button @click="()=>router.push({path: '/home'})">{{ t('message.home')}}</el-button>
    <el-button @click="()=>router.push({path: '/my'})">{{ t('message.my')}}</el-button>
    <br />

    <!-- <router-link to='/home'>首页</router-link>
    <router-link to='/my'>我的</router-link> -->
    <router-view />
  </el-config-provider>
</template>

<style lang="scss" scoped>
#app {
  button {
    font-size: 20px;
  }
}
</style>
