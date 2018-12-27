import Vue from '../../demo-vue/bower_components/vue/dist/vue'
import App from './App'
import  './main.less'

new Vue({
  el: '#app',
  components: {
    app: App
  },
  template: '<app />'
})