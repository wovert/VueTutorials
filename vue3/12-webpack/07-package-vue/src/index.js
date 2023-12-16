import { sum } from './js/math'
const { priceFormat } = require('./js/format')

// 运行时版： 更轻量，不包含模板编译器，不能编译模板。
// 构建工具中默认是vue.runtime.esm-bundler.js
// import { createApp } from 'vue'


// 开发版： 包含完整的警告和调试模式，未压缩和混淆，用于开发环境
// 需要解析模板template，需要手动指定vue.esm-bundler.js
import { createApp } from 'vue/dist/vue.esm-bundler'

// 导入才能打包
import './js/element'

console.log(sum(10, 2))
console.log(priceFormat())


const app = createApp({
  // Vue源代码对其进行解析
  // runtime+compiler = runtime
  // runtime-only

  // 这里使用：runtime-only 默认导入的vue不能使用
  template: '#my-app',
  data() {
    return {
      title: 'Vue渲染的标题'
    }
  }
})

app.mount('#app')
