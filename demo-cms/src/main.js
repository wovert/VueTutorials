// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Moment from 'moment'
import VuePreview from 'vue-preview'

// config mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入自己的css
import './assets/css/global.css'
import './assets/ttf/iconfont.css'

import MyUl from '@/components/Common/MyUl'
import MyLi from '@/components/Common/MyLi'

import NavBar from '@/components/Common/NavBar'

// 安装插件 注册全局组件及挂在属性

// config axios
import Axios from 'axios'

// config public API URL
Axios.defaults.baseURL = 'http://127.0.0.1/api/'
Vue.prototype.$axios = Axios

Vue.config.productionTip = false
// 安装插件 注册全局组件及挂在属性
Vue.use(MintUI)

// 图片预览插件
Vue.use(VuePreview) // 内部运行
// Vue.component('vue-preview', componentObj)

// 注册全局组件
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
Vue.component(NavBar.name, NavBar)

// 定义moment全局日期过滤器
Vue.filter('convertTime', function (data, formatStr) {
  return Moment(data).format(formatStr)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
