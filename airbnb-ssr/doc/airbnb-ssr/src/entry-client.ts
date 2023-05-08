import { createApp, asyncDataFilter } from './main'
import airbnb from './db' // 引入数据库和对象仓库

const { app, router, store } = createApp()

if ((window as any).__INITIAL_STATE__) {
  store.replaceState((window as any).__INITIAL_STATE__)
}

router.beforeEach((to, from, next) => {
  airbnb.airbnbDB.openStore({
    ...airbnb.languageObjectStore,
    ...airbnb.userObjectStore,
    ...airbnb.orderObjectStore,
    ...airbnb.recordObjectStore
  }).then((res: any) => {
    console.log('初始化所有对象仓库', res)
    localStorage.getItem('userId') && store.commit('setUserStatus', 1)
    next()
  })
})
router.isReady().then(() => {
  router.beforeResolve((to, from, next) => {
    const toComponents = router.resolve(to).matched.flatMap(record =>
      Object.values(record.components)
    )
    const fromComponents = router.resolve(from).matched.flatMap(record =>
      Object.values(record.components)
    )

    const actived = toComponents.filter((c, i) => {
      return fromComponents[i] !== c
    })

    if (!actived.length) {
      return next()
    }
    console.log('开始loading。。。。。')
    asyncDataFilter(actived, store, router.currentRoute).then(() => {
      console.log('结束loading。。。。。')
      next()
    })
  })

  app.mount('#app')
})


router.afterEach((to, from, next) => {
  const { roomDetail } = store.state
  const { title:roomTitle="",owner } = roomDetail || {}
  const { introduce="" } = owner || {}
  const { meta } = to
  const { title, keywords, description } = meta
   if(title){
     document.title = `${title}${roomTitle}`
   } else {
     document.title = ""
   }
  
  const keywordsMeta = document.querySelector('meta[name="keywords"]')
  keywordsMeta && keywordsMeta.setAttribute("content",`${keywords}${introduce}`)

  const descriptionMeta = document.querySelector('meta[name="description"]')
  descriptionMeta?.setAttribute("content",`${description}${introduce}`)

})