const Vue = require('vue')
const server = require('express')()

// 创建 renderer
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  // vue 实例渲染为 HTML
  renderer.renderToString(app, (err, html) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(html)
    res.send(`<html><head></head><body>${html}</body></html>`)
    // => <div data-server-rendered="true">Hello World</div>
  })
})
server.listen(5858)

// 创建 vue 实例
const app = new Vue({
  template: `<div>Hello World {{ name }}</div>`,
  data () {
    return {
      name: 'wovert'
    }
  }
})