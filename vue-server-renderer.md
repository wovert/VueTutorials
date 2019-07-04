# vue 服务器端渲染

## vue 服务器端渲染的实现

```sh
# npm i vue vue-server-renderer express --save
# vim index.js
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
# node index.js
```

## 使用单文件组件，需要配合webpack

[服务器端webpack配置](https://github.com/vuejs/vue-hackernews-2.0)