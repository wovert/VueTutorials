const path = require('path')
const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
    mode: 'development', // 调试配置：在源码中错误错误，生成阶段：production
    devtool: 'source-map', // 调试配置：默认是 eval，建立js映射文件
    devServer: {
        // contentBase: './public'
        host: '0.0.0.0',
        port: 3000,
        open: true,
        // 模块热替换
        hot: true,
        static: {
            // 内存中相对目录中查找资源文件
            directory: path.join(__dirname, '../public')
        },
        compress: true, // 是否gzip压缩, js,css等文件压缩
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8050',
                pathRewrite: {
                    '^/api': ''
                },
                secure: false, // target地址时https可以接受
                changeOrigin: true // refer使用代理地址
            }
        }
    },
})