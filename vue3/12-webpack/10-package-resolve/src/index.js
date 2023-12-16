import { sum } from 'js/math'
const { priceFormat } = require('js/format')

// 运行时版： 更轻量，不包含模板编译器，不能编译模板。
// 构建工具中默认是vue.runtime.esm-bundler.js
import { createApp } from 'vue'
import axios from 'axios'


// 开发版： 包含完整的警告和调试模式，未压缩和混淆，用于开发环境
// 需要解析模板template，需要手动指定vue.esm-bundler.js
// import { createApp } from 'vue/dist/vue.esm-bundler'


import App from 'views/App'

// 导入才能打包
import 'js/element'


// 每次都需要设置？？？？ vue-loader自动HMR
if (module.hot) {
    module.hot.accept('./js/element.js', () => {
        console.log('element 模块发生更新了')
    })
}

console.log(sum(10, 2))
console.log(priceFormat())
console.log(1234)
console.log('how are you~~~~!!')


const app = createApp(App)
app.mount('#app')


// 跨域请求
// const url = '/api/web/banner/list'
// axios.get(url).then(res => {
//     console.log('res=', res)
// }).catch(err => {
//     console.log('error=', err)
// })