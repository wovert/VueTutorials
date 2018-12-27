module.exports = {
  // 1. 入口
  entry: {
    // 可以有多个入口
    'main': './main.js'
  },

  //  2. 输出
  output: {
    filename: './build.js'
  },

  // 声明模块
  // 包含着各个loader
  module: {
    loaders: [ // webpack 后面版本可以叫做 roles
      {
        test: /\.css/,  // 查找 后缀css文件
        loader: 'style-loader!css-loader' // 先css-loader后style-loader
      }
    ]
  }  
}