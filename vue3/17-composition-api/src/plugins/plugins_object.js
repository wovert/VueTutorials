export default {
  install(app) {
    // 添加全局资源：指令/过滤器/过渡等
    app.config.globalProperties.$name = ">>>>>>>>>>>>>>>>>wovert"
    console.log('执行plugin_object插件')

    // app.component('ComponentB', {
    //   template: `<div><h2>{{ title }}</h2><p>{{ desc }}</p></div>`,
    //   data: function() {
    //     return {
    //       title: '标题B',
    //       desc: '描述内容B'
    //     }
    //   }
    // })
  }
}