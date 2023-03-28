import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import router from './router'

import './style.css'
import App from './App.vue'

console.log("env:", import.meta.env)

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
