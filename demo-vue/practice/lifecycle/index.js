import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  // template: '<div>{{ text }} num={{ num }}</div>',
  data: {
    text: 'hello world',
    num: 0
  },
  // beforeMount > render -> mounted
  render (h) {
    throw new TypeError('render error')
    // console.log('render function')
    // return h('div', {}, this.text)
  },
  // 开发时调用
  renderError (h, err) {
    console.log('renderError fuction')
    return h('div', {}, err.stack)
  },
  errorCaptured () {
    // 会向上冒泡，可以正式环境使用
    console.log('errorCaptured fuction')
    return h('div', {}, err.stack)
  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate')
  },
  created () {
    console.log(this.$el, 'created')
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount')
  },
  mounted () {
    // DOM相关操作放在这里
    console.log(this.$el, 'mounted')
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () {
    console.log(this, 'activated')
  },  
  deactivated () {
    console.log(this, 'deactivated')
  },  
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },  
  destroyed () {
    console.log(this, 'destroyed')
  },          
})

// 触发beforeMount->mounted 挂载到页面
app.$mount('#root')

// 数据更新：beforeUpdate->updated
app.$data.num = 1

// 销毁组件: beforeDestroy/destroyed
setTimeout(() => {
  app.$destroy()
}, 1000)



