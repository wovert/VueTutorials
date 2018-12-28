import Vue from '../../demo-vue/bower_components/vue/dist/vue' // node_modules下面的vue， webpack 使用runtime优先级高于的完整版本的vue
import App from './App.vue'
import  './main.less'

// ES6
const num =1
let a = 2
let fn = () => {}
new Promise(function(){})

console.log('num=',num)
console.log('a=', a)

new Vue({
  el: '#app'
  components: { // 使用完整版的vue是
    app: App
  },
  template: '<app />'
})