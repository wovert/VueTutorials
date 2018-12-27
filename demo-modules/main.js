// entry
import Vue from '../demo-vue/bower_components/vue/dist/vue'
import App from './App'
import {num1, num2} from './App'

console.log(num1, num2)

new Vue({
  el: '#app',
  components: {
    app: App
  },
  template: `<app/>`
})