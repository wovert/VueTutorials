const docsLoader = require.resolve('./doc-loader')

module.exports = (isDev) => {
  return {
    preserveWhitespace: true,       // 显示 template的空白字符 
    extractCSS: !isDev, // vue文件的样式文件单独打包，异步加载模块样式
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true // class 横岗方式转换成camelCase
    },
    hotReload: isDev,    // 不进行热更新(vue页面)，不包括样式文件
    loaders: {
      // 'docs': docsLoader // docs模块loader 
    },
    // // 前置loader
    // preLoader: {
    //   js: ''
    // },
    // // 后置loader
    // postLoader: {

    // }
  }
}