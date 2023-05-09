import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// element-plus 按需导入
import ElementPlus, { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'

// 国际化
import i18n from './language/i18n'

const app = createApp(App)
// 全局组件
app.config.globalProperties.$message = ElMessage

app.use(router)
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')
