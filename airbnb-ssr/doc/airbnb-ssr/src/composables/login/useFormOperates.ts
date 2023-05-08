import { IResultOr } from '@/api/interface'
import { userSignApi, userLoginApi } from '@/api/login'
import { getCurrentInstance } from 'vue'
import { useStore } from '@/store'
import { Router, useRoute } from 'vue-router'
interface IRuleForm {
  mobile: string,
  password: string
}
interface Result {
  userSign: (params: IRuleForm) => void,
  userLogin: (params: IRuleForm) => void,
}

export default function useFormOperates(router: Router, params: IRuleForm): Result {
  const { proxy }: any = getCurrentInstance()
  const store = useStore()
  const route = useRoute()

  // 注册接口
  function userSign(): void {
    userSignApi(params).then((res: IResultOr) => {
      const { success, message } = res
      if (success) {
        proxy.$message.success(message)
      } else {
        proxy.$message.error(message)
      }
    })
  }

  // 登录接口
  function userLogin(): void {
    userLoginApi(params).then((res: IResultOr) => {
      const { success, message, result } = res
      if (success) {
        const { status, userId } = result
        localStorage.setItem('userId', userId)
        store.commit('setUserStatus', status)
        const { redirect }: any = route.query
        console.log(redirect)
        router.push({ path: redirect || '/' })
        // window.location.href = '/'
        // proxy.$message.success(message)
      } else {
        proxy.$message.error(message)
      }
    })
  }
  return {
    userSign,
    userLogin
  }
}
