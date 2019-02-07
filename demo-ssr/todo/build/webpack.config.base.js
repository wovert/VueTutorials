const path = require('path')
const createVueLoaderOptions = require('./vue-loader.config.js')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  // 入口文件
  entry: path.join(__dirname, '../client/index.js'),

  // 打包文件
  output: {
    filename: 'bundle.[hash:8].js',  // 打包文件
    path: path.join(__dirname, '../dist'),  // 打包目录
    publicPath: '/public/'
  },
  // 模块处理
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: createVueLoaderOptions(isDev)
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // 没有用到css文件
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader', // 后解析style, 插入到页面
      //     'css-loader' // 先解析css
      //   ],
      //   exclude: /node_modules/
      // },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [ 
          {
            loader: 'url-loader',
            options: {
              limit: 1024, // 小于 5000 bytes 图片转换成 base64编码格式
              name: 'resources/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}

module.exports = config