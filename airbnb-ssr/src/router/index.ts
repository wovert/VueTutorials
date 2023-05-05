import { 
    createRouter, 
    createWebHistory
    // createMemoryHistory, // SSR
    // createWebHashHistory 
} from 'vue-router'

import home from '@/views/home/index.vue'
import my from '@/views/my/index.vue'


const routes = [
    {
        path: '/home',
        name: 'home',
        component: home,
        meta: {
            title: 'home page',
            keeAlive: false
        }
    },
    {
        path: '/my',
        name: 'my',
        component: my,
        meta: {
            title: 'home page',
            keeAlive: false
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router