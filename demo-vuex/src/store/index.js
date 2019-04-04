import Vue from 'vue'
import Vuex from 'vuex'

// 在模块化构建系统中，注册插件
Vue.use(Vuex)

// 创建一个 store
export default new Vuex.Store({
  // 4. 配置store中的数据/存取
  state: {
    num: 30
  },
  // 取数据
  getters: {
    getNum (state) {
      return state.num
    }
  },
  // 操作数据
  mutations: { // 只能是同步代码
    addNum (state, payload) {
      // setTimeout(function () {
      //   state.num += payload.num // 接受的值需要与后台请求进行运算再赋值
      // }, 1000)
      console.log('payload:', payload)
      state.num += payload.num
    }
  },
  // 行为中，可以存在异步操作，但是最终还是通知 mutations
  actions: {
    addNumByServerRate (store, payload) {
      console.log(payload)
      // 有异步操作，可以记录快照
      setTimeout(function () {
        // 后台比例是 1
        let rate = 1
        store.commit('addNum', {num: payload.num * rate})
      }, 1000)
    }
  }
})
