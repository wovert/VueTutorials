import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'
import Cart from '@/components/Cart/Cart'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'
import PhotoList from '@/components/Photo/PhotoList'
import PhotoDetail from '@/components/Photo/PhotoDetail'
import GoodsList from '@/components/Goods/GoodsList'
import GoodsDetail from '@/components/Goods/GoodsDetail'

// 注册全局组件 router-view router-link
// 挂在Vue.prototype.$router
// 挂在Vue.prototype.$route
// 未来所有的组件中的 this 对象，就具备该属性
// 所有的 this 其实就是Vue的子类对象
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
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
    },
    // 新闻列表
    {
      path: '/news/list',
      name: 'news.list',
      component: NewsList
    },
    // 新闻详情
    {
      path: '/news/detail',
      name: 'news.detail',
      component: NewsDetail
    },
    // 图文列表
    {
      path: '/photo/list/:categoryId',
      name: 'photo.list',
      component: PhotoList
    },
    // 图文详情
    {
      path: '/photo/detail/:id',
      name: 'photo.detail',
      component: PhotoDetail
    },
    // 商品列表
    {
      path: '/goods/list/:id',
      name: 'goods.list',
      component: GoodsList
    },
    // 图文详情
    {
      path: '/goods/detail/:id',
      name: 'goods.detail',
      component: GoodsDetail
    }
  ]
})
