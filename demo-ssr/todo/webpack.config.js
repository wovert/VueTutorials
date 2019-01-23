const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  // 入口文件
  entry: path.join(__dirname, 'src/index.js'),

  // 打包文件
  output: {
    filename: 'bundle.[hash:8].js',  // 打包文件
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
        test: /\.jsx$/,
        loader: 'babel-loader'
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
              limit: 5000, // 小于 5000 bytes 图片转换成 base64编码格式
              name: '[hash].[ext]'
              // name: '[name].[ext]'
            }
          }
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

  // 开发环境
  config.module.rules.push({
    test: /\.styl$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'stylus-loader'
    ],
    exclude: /node_modules/
  })


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
} else {

  // 单独打包vue库
  config.entry = {
    app: path.join(__dirname, 'src/index.js'),
    vendor: ['vue']
  }

  
  config.output.filename = '[name].[chunkhash:8].js'
  
  // css生成单独的文件
  config.module.rules.push({
    test: /\.styl$/,
    use: ExtractPlugin.extract({
      fallback: 'style-loader',
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
  })
  config.plugins.push(
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
  )
}

module.exports = config