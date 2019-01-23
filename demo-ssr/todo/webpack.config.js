const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  // 入口文件
  entry: path.join(__dirname, 'src/index.js'),

  // 打包文件
  output: {
    filename: 'bundle.js',  // 打包文件
    path: path.join(__dirname, 'dist')  // 打包目录
  },
  // 模块处理
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // 后解析style, 插入到页面
          'css-loader' // 先解析css
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [ 
          {
            loader: 'url-loader',
            options: {
              limit: 5000, // 小于 5000 bytes 图片转换成 base64编码格式
              name: '[hash].[ext]'
              // name: '[name].[ext]'
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: '/\.less$/',
        use: [
          {
            loader: 'file-loader'
          },
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: '/\.sass$/',
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      // webpack 编译过程当中以及js页面上判断环境，可以调用process.env
      'process.env': {
        // process.env.NODE_ENV = development 没有加引用会出错
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HtmlPlugin()
  ]
}

if (isDev) {
  // 调试代码（ES6代码直接在浏览器中可以调试）
  config.devtool = '#cheap-module-eval-source-map'

  // webpack 2.0支持
  config.devServer = {
    port: 8000, // 监听端口
    host: '0.0.0.0', // 服务地址, 使用localhost和IP都可以访问
    overlay: {
      errors: true // 如果有错误显示在网页上
    },
    // historyFallback: {
    // },
    hot: true // 修改一个组件，只有重新渲染这个组件
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}

module.exports = config