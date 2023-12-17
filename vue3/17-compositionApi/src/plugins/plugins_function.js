import Hello from '../components/Hello.vue'
export default (app) => {
  // app.mixin()
  app.component('Hello', Hello)
  console.log('执行plugin_function插件')
  console.log('app==============>', app)
}