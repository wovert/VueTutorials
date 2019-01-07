import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'
import Cart from '@/components/Cart/Cart'

// 注册全局组件 router-view router-link
// 挂在Vue.prototype.$router
// 挂在Vue.prototype.$route
// 未来所有的组件中的 this 对象，就具备该属性
// 所有的 this 其实就是Vue的子类对象
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
