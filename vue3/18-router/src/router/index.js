import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { ref } from 'vue'
// 2.配置映射关系
const routes = [
  {
    path: "/", // 默认路由
    redirect: "/home" // 重定向路由
  },
  { 
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "home-chunk" */"../pages/Home.vue"),
    meta: {
      name: "why",
      age: 18,
      height: 1.88,
      index: 1
    },
    children: [
      {
        path: "",
        redirect: "/home/message"
      },
      {
        path: "message",
        component: () => import("../pages/HomeMessage.vue")
      },
      {
        path: "shops",
        component: () => import("../pages/HomeShops.vue")
      }
    ]
  },
  { 
    path: "/about",
    name: "about",
    meta: {
      index: 2
    },
    component: () => import("../pages/About.vue") 
  },
  { 
    path: "/user/:username/id/:id",
    meta: {
      index: 3
    },
    component: () => import("../pages/User.vue") 
  },
  {
    path: "/login",
    component: () => import("../pages/Login.vue")
  },
  {
    // 最后多个*解析成数组形式
    // path: "/:pathMatch(.*)*",
    path: "/:pathMatch(.*)",
    component: () => import("../pages/NotFound.vue")
  }
]

// 3.创建一个路由对象router
const router = createRouter({
  routes,
  // history: createWebHistory() // H5 History
  history: createWebHashHistory(),
  // linkActiveClass: 'link-active',
  // linkExactActiveClass: 'link-exact-active',
})

// 动态添加路由
const categoryRoute = {
  path: "/category",
  meta: {
    index: 4
  },
  component: () => import("../pages/Category.vue")
}

// 添加顶级路由对象
router.addRoute(categoryRoute)

// 添加二级路由对象
router.addRoute("home", {
  path: "moment",
  component: () => import("../pages/HomeMoment.vue")
})

// 删除路由
// 1. 设置原来一样参数，替换
// 2. router.removeRouter(name)
// 3. 设置路由之后返回函数，调用函数就可以删除路由


/************* 导航守卫 beforeEach *****************/
let counter = 0;
// to: Route对象, 即将跳转到的Route对象
// from: Route对象, 
/**
 * 返回值问题:
 *    1.false: 不进行导航
 *    2.undefined或者不写返回值: 进行默认导航
 *    3.字符串: 路径, 跳转到对应的路径中
 *    4.对象: 类似于 router.push({path: "/login", query: ....})
 */
// let transitionName = ref()
router.beforeEach((to, from) => {
  console.log('从', from)
  console.log('到', to)
  console.log(`进行了${++counter}路由跳转`)
  // if (to.path.indexOf("/home") !== -1) {
  //   return "/login"
  // }
  if (to.path !== "/login") {
    const token = window.localStorage.getItem("token")
    if (!token) {
      return "/login"
    }
  }

  // // 根据路由标记判断触发哪个动画
  // if (to.meta.index > from.meta.index) {
  //   // 从右往左动画
  //   transitionName.value = 'slide-right'
  // } else if (to.meta.index < from.meta.index) {
  //   // 从右往左动画
  //   transitionName.value = 'slide-left'
  // } else {
  //   transitionName.value = ''
  // }
})

// n: 导出路由
export default router

