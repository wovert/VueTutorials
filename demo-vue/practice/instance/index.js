import Vue from 'vue'

// new Vue({
//   el: '#root',
//   template: '<div>{{ hello }}</div>',
//   data: {
//     text: 'hello world'
//   }
// })

const app = new Vue({
  template: '<div ref="div">{{obj.a}}-{{ text }}..{{ num }}</div>',
  data: {
    text: 'hello world',
    num: 0,
    obj: {}
  },

  // app组件注销时自动注销watch
  // watch: {
  //   num (newNum, oldNum) {
  //     console.log(`${oldNum} => ${newNum}`)
  //   }
  // }
})
app.$mount('#root')
app.text = 'hi'

let i = 0
setInterval(() => {
  // 异步渲染，不是每次都会渲染，如果希望每次DOM节点更新之后渲染
  app.num += 1
  app.num += 1
  app.num += 1
  app.num += 1
  app.num += 1

  // vue DOM更新之后调用callback
  // vm.$nextTick([callback])

  // i++
  // // app.obj.a = i
  // // 刚开始没有值，forceUpdate之后渲染
  // // app.$forceUpdate()

  // // 或者使用补属性方法
  // app.$set(app.obj, 'a', i)
  // setTimeout(() => {
  //   app.$delete(app.obj, 'a')
  // }, 2000)



  // 不是同一个对象
  // app.$options.data.num += 10
  app.$data.num += 10
}, 1000)

// console.log(app.$data)
// console.log(app.$pros)
// console.log(app.$el)
// console.log(app.$options)

// 数据变化时，重新渲染
// app.$options.render = h => {
//   return h('div', {}, 'new render function')
// }

// vue instance
// console.log(app.$root === app)

// <item><div></div></item>
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)

// 如果组件返回组件实例，如果是DOM返回DOM
// console.log(app.$refs)

// 服务端渲染
// console.log(app.$isServer)

// 监听数据变化
// const unWatch= app.$watch('num', (newNum, oldNum) => {
//   console.log(`${oldNum} => ${newNum}`)
// })
// setTimeout(() => {
//   unWatch()
// },3000)

// 事件监听
// app.$on('test', (a, b) => {
//   console.log('test emited:')
//   console.log(`a=${a}`)
//   console.log(`b=${b}`)
// })

// // 仅触发一次
// app.$once('only', (a, b) => {
//   console.log('only emited:')
//   console.log(`a=${a}`)
//   console.log(`b=${b}`)
// })

// // 触发事件
// setInterval(() => {
//   // app.$emit('test', 1, 2)
//   app.$emit('only', 1, 2)
// }, 1000)


// 强制组件渲染
// 没有data方法里声明的属性，在他出赋予其他值不会重新渲染
// app.$forceUpdate()





