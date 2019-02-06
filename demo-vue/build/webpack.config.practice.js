const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.config.base')


const defaultPlugins = [
  new webpack.DefinePlugin({
    // webpack 编译过程当中以及js页面上判断环境，可以调用process.env
    'process.env': {
      // process.env.NODE_ENV = development 没有加引用会出错
      NODE_ENV: '"development"'
    }
  }),
  // html template
  new HtmlPlugin({
    template: path.join(__dirname, 'template.html')
  })
]

const devServer = {
  port: 8080, // 监听端口
  host: '0.0.0.0', // 服务地址, 使用localhost和IP都可以访问
  overlay: {
    errors: true // 如果有错误显示在网页上
  },
  // historyFallback: {
  // },
  hot: true // 修改一个组件，只有重新渲染这个组件
}

// 合并
let config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),

  // 调试代码（ES6代码直接在浏览器中可以调试）
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              module:  true,
              localIdentName: '[path]-[name]-[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }      
    ]
  },
  // webpack 2.0支持
  devServer,
  resolve: {
    alias: {
      // import vue from 'Vue' 指定版本号
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ])
})


module.exports = config