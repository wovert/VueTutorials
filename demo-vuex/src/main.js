// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 1. 引入Vuex
import Vuex from 'vuex'
// import Axios from 'axios'

import numModule from '@/modules/numModule'

Vue.config.productionTip = false

// 2. 安装插件
Vue.use(Vuex)

// 3. 创建store
let store = new Vuex.Store({
  modules: {
    numModule: numModule
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
