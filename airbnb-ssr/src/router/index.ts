import { 
    createRouter,  // 路由实例
    createWebHistory // history
    // createMemoryHistory, // SSR
    // createWebHistory, // hash
    // createWebHashHistory 
} from 'vue-router'


const home = () => import('@/views/home/home.vue')
const my = () => import('@/views/my/my.vue')
const login = () => import('@/views/login/login.vue')


// 定义路由
const routes = [
    {
        path: '/home',
        name: 'home', // 路由名称
        component: home, // 路由组件
        meta: {
            title: 'home page',
            keepAlive: false
        }
    },
    {
        path: '/my',
        name: 'my',
        component: my,
        meta: {
            title: 'home page',
            keepAlive: false
        }
    },
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            title: 'login page',
            keepAlive: false
        }
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router