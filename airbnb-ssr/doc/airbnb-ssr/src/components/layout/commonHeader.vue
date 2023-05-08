<script setup lang="ts">
import { ref, getCurrentInstance, defineAsyncComponent, onMounted } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn.js'
import en from 'element-plus/lib/locale/lang/en.js'
import { fetchLanguageApi } from '../../api/layout'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { userLogoutApi } from '@/api/login'
import { IResultOr } from '@/api/interface'
import { useStore } from '@/store'

const OrderPopover = defineAsyncComponent(() => import('@/views/order/components/orderPopover.vue'))
const { t, locale: localeLanguage } = useI18n()
const router = useRouter()
const { proxy }: any = getCurrentInstance()
const activeIndex = ref('orders')
const store = useStore()

/* eslint-disable */
const emit = defineEmits<{
  (e: 'changeLang', language: any): void
}>()
function handleSelect(e: any) {
  if (e === 'zh') {

    store.dispatch('saveLanguage', zhCn)
    localeLanguage.value = e
  } else if (e === 'en') {
    store.dispatch("saveLanguage", en)
    localeLanguage.value = e
  } else if (e === 'login') {
    router.push({ name: 'login' })
  } else if (e === 'logout') {
    userLogout()
  } else if (e === 'orders') {
    store.commit('setOrderVisible', true)
  } else if (e === 'records') {
    router.push({ name: 'record' })
  }
  console.log(e)
}

// Mock接口：获取当前语言包
function getLanguage() {
  fetchLanguageApi().then(res => {
    const { success, result } = res
    const { name } = result || {}
    if (success) {
      if (name === 'zh') {
        store.dispatch('saveLanguage', zhCn)
        localeLanguage.value = name
      } else if (name === 'en') {
        store.dispatch("saveLanguage", en)
        localeLanguage.value = name
      }
      console.log('获取当前语言包成功')
    }
  })
}
onMounted(() => {
  getLanguage()
})


// const userStatus = localStorage.getItem('userStatus')
// 登出接口
function userLogout() {
  userLogoutApi().then((res: IResultOr) => {
    const { success, message } = res
    if (success) {
      // proxy.$message.success(message)
      router.push({ name: 'login' })
      // localStorage.setItem('userStatus', '0')
      store.commit('setUserStatus', 0)
      localStorage.setItem('userId', '')
    } else {
      proxy.$message.error(message)
    }
  })
}
</script>

<template>
  <div class="header-common">
    <img
      @click="() => { router.push({ name: 'home' }) }"
      class="logo"
      src="../../assets/images/layout/logo.png"
      alt="爱此迎"
    />
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="orders">
        {{ t("header.orders") }}
        <template v-if="store.state.orderVisible">
          <Suspense>
            <template #default>
              <OrderPopover />
            </template>
            <template #fallback>
              <div class="loading-block">{{ t("common.loading") }}</div>
            </template>
          </Suspense>
        </template>
      </el-menu-item>
      <el-menu-item index="records">{{ t("header.records") }}</el-menu-item>
      <el-sub-menu index="language">
        <template #title>{{ t("header.language") }}</template>
        <el-menu-item index="zh">中文</el-menu-item>
        <el-menu-item index="en">English</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="logout" v-if="store.state.userStatus === 1">{{ t("login.logout") }}</el-menu-item>
      <el-menu-item index="login" v-else>{{ t("login.loginTab") }}/{{ t("login.signTab") }}</el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/layout/commonHeader.scss";
</style>
