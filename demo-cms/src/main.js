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

// import button from 'mint-ui/lib/button'
// import 'mint-ui/lib/button/style.css'

// 引入自己的css
import './assets/css/global.css'
import './assets/ttf/iconfont.css'

import MyUl from '@/components/Common/MyUl'
import MyLi from '@/components/Common/MyLi'
import NavBar from '@/components/Common/NavBar'
import Comment from '@/components/Common/Comment'
import MySwipe from '@/components/Common/MySwipe'

// 安装插件 注册全局组件及挂在属性

// config axios
import Axios from 'axios'

// Axios.defaults.baseURL = 'http://m.spa.com/api/'

Axios.defaults.baseURL = 'http://api.haoshan.com/v1/'
// Axios.defaults.baseURL = '/v1'
Vue.prototype.$axios = Axios

// 配置请求拦截器，显示loadding 图标
Axios.interceptors.request.use(function (config) {
  MintUI.Indicator.open({
    text: '加载中'
  })
  return config
})
// 配置响应拦截器，关闭loadding图标
Axios.interceptors.response.use(function (response) {
  // response.config 类似 上面config
  MintUI.Indicator.close()
  return response
})

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
Vue.component(Comment.name, Comment)
Vue.component(MySwipe.name, MySwipe)

Moment.locale('zh-cn')

// 定义moment全局日期过滤器
Vue.filter('convertTime', function (data, formatStr) {
  return Moment(data).format(formatStr)
})

Vue.filter('relativeTime', function (previousTime) {
  return Moment(previousTime).fromNow()
})

// 处理字符串过长的过滤器
Vue.filter('convertStr', function (str, count) {
  return str.substring(0, count) + '...'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  // mounted () {
  //   document.dispatchEvent(new Event('render-event'))
  // }
})
