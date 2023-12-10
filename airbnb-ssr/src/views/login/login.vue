<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n'

import { useRouter, useRoute } from 'vue-router'
// import useFormProperties from '@/composables/login/useFormProperties'
// import useFormOperates from '@/composables/login/useFormOperates'
const activeName = ref('login')

const router = useRouter()
const route = useRoute()

// router.beforeEach(async (to, from, next) => {
//   const fullPath = to.fullPath
//   console.log('fullPath=', fullPath)
//   to.fullPath = fullPath
// })

console.log('router=', router)
console.log('route=', route)
console.log('route.fullPath=', route.fullPath)

const { proxy } = getCurrentInstance()

// proxy.$router.push("/my02")
console.log('proxy.route.fullPath=', proxy.$route)

const { t } = useI18n()
// const { ruleForm, loginText, ruleFormRef, activeName, rules } = useFormProperties(t)
// const { userSign, userLogin } = useFormOperates(router, ruleForm)

function handleClick(e: any) {
  const { name } = e.props
  loginText.value = t(`login['${name}Btn']`)
}

// function submitForm() {
//   ruleFormRef.value.validate((valid: any) => {
//     if (valid) {
//       if (activeName.value === 'sign') {
//         userSign()
//       } else if (activeName.value === 'login') {
//         userLogin()
//       }
//     } else {
//       return false
//     }
//   })
// }

</script>

<template>
  <div class="login-page">
    <div class="left-part"></div>
    <div class="right-part">
      <div class="login-panel">
        <!-- tabs -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="t('login.loginTab')" name="login"></el-tab-pane>
          <el-tab-pane :label="t('login.signTab')" name="sign"></el-tab-pane>
        </el-tabs>
        <!-- 表单组件 -->
        <el-form ref="ruleFormRef">
          <el-form-item prop="mobile">
            <el-input :placeholder="t('login.placeMobile')" ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :placeholder="t('login.placePass')"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login-btn" type="primary">{{ loginText }}</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/login/index.scss";
</style>
