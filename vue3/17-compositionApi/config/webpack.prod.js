const { CleanWebpackPlugin } = require('clean-webpack-plugin') // clean 插件
const CopyWebpackPlugin = require('copy-webpack-plugin') // index.html 插件

const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
 
module.exports = merge(commonConfig, {
    mode: 'production', // 调试配置：在源码中错误错误，生成阶段：production
    plugins: [
        new CleanWebpackPlugin(),
        // webpack-dev-server 使用时，也会复制到内存中
        // 用于生产环境
        new CopyWebpackPlugin({
            // 复制规则
            patterns: [
                {
                    from: './public',
                    // to: '.', // 目标编译目录
                    // 忽略文件
                    globOptions: {
                        ignore: [
                            '**/index.html'
                        ]
                    }
                }
            ]
        }),
    ]
})