const path = require('path')

module.exports = {
    // 入口文件
    entry: './src/index.js',

    // 打包文件配置
    output: {
        // 指定绝对路径，__dirname 当前文件webpakc.config.js所在的目录
        path: path.resolve(__dirname, "./build"),

        // 打包生成的文件名
        filename: 'index.js'
    }
}