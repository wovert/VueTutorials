import Vue from 'vue'
import App from './app.vue'

// import './assets/styles/test.css'
// import './assets/styles/test-stylus.styl'
// import './assets/images/1.png'


import './assets/styles/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: h => h(App)
    //vue在创建Vue实例时,通过调用render方法来渲染实例的DOM树,也就是这个组件渲染的是App的内容
    //vue在调用render方法时,会传入一个createElement函数作为参数,也就是这里的h的实参是createElement函数,然后createElement会以App为参数进行调用
}).$mount(root)