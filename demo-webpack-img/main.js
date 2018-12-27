import Vue from '../demo-vue/bower_components/vue/dist/vue'
import App from './App'
import  './main.css'

new Vue({
  el: '#app',
  components: {
    app: App
  },
  template: '<app />'
})