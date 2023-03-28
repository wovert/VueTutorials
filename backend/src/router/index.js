import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Login from '../components/Login.vue'

const routes = [
    {
        name: 'home',
        path: '/home',
        meta: {
            title: '首页'
        },
        component: Home,
        redirect: '/welcome',
        children: [
            {
                name: 'welcome',
                path: '/welcome',
                meta: {
                    title: '欢迎页'
                },
                component: Welcome,
            },
            {
                name: 'login',
                path: '/login',
                meta: {
                    title: '登录页'
                },
                component: Login,
            }
        ]
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router