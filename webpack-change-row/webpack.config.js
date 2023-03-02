const path = require('path')

// clean dist directory plugin
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// 1. 导入 HTML 插件
const HtmlPlugin = require('html-webpack-plugin')

// 2.创建 HTML 插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html', // 指定赋值哪个文件
    filename: './index.html' // 指定生成的文件的存放路径
})

module.exports = {
    mode: 'development', // development or production
    devtool: 'nosources-source-map',
    entry: path.join(__dirname, './src/index.js'), // 打包入口文件路径
    output: {
        path: path.join(__dirname, 'dist'), // 输出目录
        filename: 'js/bundle.js' // 输出文件名
    },

    devServer: {
        open: true, // 出吃打包完成后，自动打开浏览器
        host: '127.0.0.1', // 实时打包使用的主机地址
        port: 8087 // 实时打包使用的端口号
    },

    // 所有第三方文件模块匹配的规则
    module: {
        rules: [ // 文件后缀名的匹配规则
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/, // 匹配的文件类型
                use: ['style-loader', 'css-loader'] // 固定顺序， css文件先css-loader处理，再处理style-loader，最后转交给webpack
            },

            // 处理 .less 文件
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader','less-loader']
            },
            // 处理 .scss 文件
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader','sass-loader']
            },
            {
                test: /\.jpe?g|png|gif$/,
                // 22229byte => 22kb
                use: ['url-loader?limit=22229&outputPath=images'] // 《=limit=(byte) 图片才会被转换为base64图片
            }

        ]
    },
    // 插件数组，webpack 运行时，会加载并调用这些插件
    plugins: [htmlPlugin, new CleanWebpackPlugin()] // 通过 plugins节点，是 htmlPLugin 插件生效
}