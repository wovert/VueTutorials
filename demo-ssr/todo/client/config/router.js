import Router from 'vue-router'
import routes from './routes'

export default () => {
  return new Router({
    routes: routes,
    mode: 'history',
    // base: '/base/',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior (to, from, savedPosition) {
      // 记录滚动条位置
      console.log(savedPosition)
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0}
      }
    },
    // parseQuery (query) {

    // },
    // stringifyQuery (obj) {

    // },
    fallback: true // history不支持浏览器使用hash模式 false:多页应用
  })
}
