const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 1. 入口
  entry: {
    // 可以有多个入口
    'main': './src/main.ts'
  }

  //  2. 输出
  ,output: {
    // 指定输出的目录
    path: path.resolve('./dist'), // 相对地址转绝对地址
    filename: '[name].bundle.js'
  }

  // 声明模块
  // 包含着各个loader
  ,module: {
    loaders: [ // webpack 后面版本可以叫做 roles
      {
        test: /\.css$/,  // 查找 后缀css文件
        loader: 'style-loader!css-loader' // 先css-loader后style-loader
      },
      {
        test: /\.less$/,  // 查找 后缀less文件->css->style
        loader: 'style-loader!css-loader!less-loader' 
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'url-loader?limit=355837' // 图片大小小于9000字节会base64编码
      },
      // 处理ES6/7/8
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude : /node_modules/, // node_moduels不包含
        options: {
          presets: ['env'], // 处理关键字
          plugins: ['transform-runtime'] // 处理函数
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  }
  // 3. 监视文件发生改动，自动编译build.js
  ,watch: true

  
  ,plugins: [
    // 插件的执行顺序与元素索引有关
    new htmlWebpackPlugin({
      template: './src/index.html', // 参照物 ./src/index.html移动到 ./dist/index.html
    })
  ]
}