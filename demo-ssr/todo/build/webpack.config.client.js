const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')

const baseConfig = require('./webpack.config.base')

const isDev = process.env.NODE_ENV === 'development'

const defaultPlugins = [
  new webpack.DefinePlugin({
    // webpack 编译过程当中以及js页面上判断环境，可以调用process.env
    'process.env': {
      // process.env.NODE_ENV = development 没有加引用会出错
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HtmlPlugin()
]

const devServer = {
  port: 8000, // 监听端口
  host: '0.0.0.0', // 服务地址, 使用localhost和IP都可以访问
  overlay: {
    errors: true // 如果有错误显示在网页上
  },
  historyApiFallback: {
    index: '/public/index.html'
  },
  hot: true // 修改一个组件，只有重新渲染这个组件
}

let config

if (isDev) {

  // 合并
  config = merge(baseConfig, {
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
                localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]'
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
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ])
  })

} else { 

  config = merge(baseConfig, {
    // 单独打包vue库
    entry: {
      app: path.join(__dirname, '../client/index.js'),
      vendor: ['vue']
    },
    output: {
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.styl$/,
          // css生成单独的文件
          use: ExtractPlugin.extract({
            fallback: 'vue-style-loader',
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              'stylus-loader'
            ]      
          })
        }
      ]
    },
    plugins: defaultPlugins.concat([
      new ExtractPlugin('styles.[contentHash:8].css'),
      // 单独打包vue库
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      // webpack 给每个模块添加id编号，新的模块插入的时候可能在中间，导致后面的后面
      // 模块编号产生变化。变化之后导致导出来的hash产生变化，浏览器缓存时效
      new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
      })
    ])
  })
}

module.exports = config