import Vue from 'vue'
import Router from 'vue-router'

// import Home from '@/components/Home/Home'
// import Member from '@/components/Member/Member'
// import Search from '@/components/Search/Search'
// import Cart from '@/components/Cart/Cart'
// import NewsList from '@/components/News/NewsList'
// import NewsDetail from '@/components/News/NewsDetail'
// import PhotoList from '@/components/Photo/PhotoList'
// import PhotoDetail from '@/components/Photo/PhotoDetail'
// import GoodsList from '@/components/Goods/GoodsList'
// import GoodsDetail from '@/components/Goods/GoodsDetail'
// import GoodsComment from '@/components/Goods/GoodsComment'

// 动态导入
const Home = () => import('@/components/Home/Home')
const Member = () => import('@/components/Member/Member')
const Search = () => import('@/components/Search/Search')
const Cart = () => import('@/components/Cart/Cart')
const NewsList = () => import('@/components/News/NewsList')
const NewsDetail = () => import('@/components/News/NewsDetail')
const PhotoList = () => import('@/components/Photo/PhotoList')
const PhotoDetail = () => import('@/components/Photo/PhotoDetail')
const GoodsList = () => import('@/components/Goods/GoodsList')
const GoodsDetail = () => import('@/components/Goods/GoodsDetail')
const GoodsComment = () => import('@/components/Goods/GoodsComment')

// 注册全局组件 router-view router-link
// 挂在Vue.prototype.$router
// 挂在Vue.prototype.$route
// 未来所有的组件中的 this 对象，就具备该属性
// 所有的 this 其实就是Vue的子类对象
Vue.use(Router)

export default new Router({
  mode: 'history',
  // scrollBehavior (to, from, savedPosition) {
  //   console.log(to)
  //   return {
  //     x: 0,
  //     y: 50
  //   }
  // },
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
    },
    // 商品图文介绍
    {
      path: '/goods/photo/info',
      name: 'photo.info',
      component: NewsDetail
    },
    // 商品评论组件
    {
      path: '/goods/comment',
      name: 'goods.comment',
      component: GoodsComment
    }
  ]
})
