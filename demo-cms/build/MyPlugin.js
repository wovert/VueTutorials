let MyPlugin = function (options) {
  this.test = options.test
}

MyPlugin.prototype.apply = function (compiler) {
  // console.log('自定义插件开始执行')
  // console.log(this.test)
  // compiler.options 获取webpack配置文件的属性
  // console.log(compiler)
  compiler.plugin('compilation', compilation => {
    // 别人编译的入口
    compilation.plugin('html-webpack-plugin-before-html-processing', (htmlData, calllback) => {
      // html-webpack-plugin 中间插入行为的地方
      // console.log(htmlData.html)
      htmlData.html = htmlData.html.replace(`<div id="app"></div>`, `<div id="app"><div style="background:pink;height:500px">骨架屏</div></div>`)
      calllback(null, htmlData)
    })
  })
}

module.exports = MyPlugin
