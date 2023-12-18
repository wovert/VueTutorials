import { createApp } from 'vue'
import App from './App'

const app = createApp(App)


import registerDirectives from './directives'
import pluginObject from './plugins/plugins_object'
import pluginFunction from './plugins/plugins_function'

registerDirectives(app)

// 对象类型：一个对象，必须包含一个 install函数，该函数会在安装插件时执行
app.use(pluginObject)

// 函数类型插件，在安装插件时自动执行
app.use(pluginFunction)

// 全局指定指令
// app.directive("focus", {
//   mounted(el, bindings, vnode, preVnode) {
//     console.log("focus mounted");
//     el.focus();
//   }
// })


app.mixin({
  data() {
    return {}
  },
  methods: {

  },
  created() {
    // console.log(">>>>>>>>>>>>>>>>>>全局的created生命周期")
  }
})

app.mount('#app')





