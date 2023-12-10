<script setup lang="ts">
import { ref, /*defineEmits*/ } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import ko from 'element-plus/dist/locale/ko.mjs'

import{ saveLanguageApi, fetchLanguageApi } from '../../api/layout/index.ts'

const emit = defineEmits<{(e: 'onChangeLang', language: any): void}>()

const activeIndex = ref('orders')

const handleSelect = (e: any) => {
    switch(e) {
        case 'zh':
            emit('onChangeLang', zhCn)
            saveLanguage('zh')
            break
        case 'en':
            emit('onChangeLang', en)
            saveLanguage('en')
            break
        case 'ko':
            emit('onChangeLang', ko)
            saveLanguage('ko')
            break
    }
    console.log('e==============>', e)
}

// Mock 接口，保存当前语言包
function saveLanguage(langauge: any) {
    saveLanguageApi(langauge).then((res: any) => {
        console.log('res========', res)
        let { success } = res
        if (success) {
            console.log('保存当前语言包成功')
        }
    })
}

// Mock 接口：获取当前语言包
function getLanguage() {
    fetchLanguageApi().then((res: any) => {
        const {  success, result } = res
        const { name } = result
        if (success) {
            switch(name) {
            case 'zh':
                emit('onChangeLang', zhCn)
                break
            case 'en':
                emit('onChangeLang', en)
                break
            case 'ko':
                emit('onChangeLang', ko)
                break
            }
        }
    })
}

getLanguage()
</script>

<template>
<div class="header-common">
     <img class="logo" src="../../assets/images/layout/logo.png" alt="爱此迎">
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="orders">房屋订单中心</el-menu-item>
      <el-menu-item index="records">历史足迹</el-menu-item>
      <el-sub-menu index="language">
        <template #title>国际化切换</template>
        <el-menu-item index="zh">中文 </el-menu-item>
        <el-menu-item index="en">English</el-menu-item>
        <el-menu-item index="ko">한국어</el-menu-item>
      </el-sub-menu>

      <el-menu-item index="avatar">
        <img class="avatar" src="../../assets/images/layout/avatar.jpg" alt="个人中心">
      </el-menu-item>
    </el-menu>
</div>
</template>

<style scoped>
@import '@/assets/scss/layout/commonHeader.scss'
</style>
