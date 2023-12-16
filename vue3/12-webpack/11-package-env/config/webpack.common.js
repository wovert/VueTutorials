const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // index.html 插件
const { DefinePlugin } = require('webpack') // BASE_URL 报错解决方案
const { VueLoaderPlugin } = require('vue-loader/dist/index')
 
module.exports = {
    target: 'web',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: 'static/js/bundle.js',
        // assetModuleFilename: 'img/[name]_[hash:10][ext][query]' // 指定静态文件存储规则
    },
    resolve: {
        extensions: ['.js', '.json', '.mjs', '.vue', '.ts', '.tsx'], // 有默认值
        alias: {
            'js': path.resolve(__dirname, '../src/js'),
            'views': path.resolve(__dirname, '../src/views'),
            '@': path.resolve(__dirname, '../src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/, // 匹配规则
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader',
                ]
            },
            {
                // 使用 webpack5内部配置
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset", // 静态资源打包路径
                parser: {
                  dataUrlCondition: {
                    maxSize: 100 * 1024, // 小于100kb转base64，减少请求次数
                  },
                },
                generator: {
                  filename: "static/images/[hash:32][ext][query]", // 指定打包路径和文件名
                },
            },
            {
                test: /\.(eot|ttf|woff2?|sv)$/i,
                type: "asset/resource", // 静态资源打包路径
                generator: {
                  filename: "static/fonts/[hash:32][ext][query]", // 指定打包路径和文件名
                },
            }
            // {
            //     test: /\.(png|jpe?g|gif|svg)$/i,
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             outputPath: 'assets/images',
            //             name: '[name]-[hash:32].[ext][query]',
            //             limit: 100 * 1024, // 小于 100kb
            //             esModule: false // file-loader 默认使用 ES6 模块解析，将其关闭，启用 CommonJS 模块，不配置这个，html 文件中的图片路径不对
            //         }
            //     },
            //     type: 'javascript/auto' // 不加这个配置，一张图片打包后会生成两张
            // },
            // {
            //     test: /\.(eot|ttf|woff2?|sv)$/i,
            //     use: {
            //         loader: 'file-loader',
            //         options: {
            //             outputPath: 'assets/fonts',
            //             name: '[name]-[hash:32].[ext][query]',
            //             esModule: false // file-loader 默认使用 ES6 模块解析，将其关闭，启用 CommonJS 模块，不配置这个，html 文件中的图片路径不对
            //         }
            //     },
            //     type: 'javascript/auto' // 不加这个配置，一张图片打包后会生成两张
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'webpack plugin'
        }),
        new DefinePlugin({
            BASE_URL: '"./"', // 值是一个变量或者字符串字面量
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false
        }),
        new VueLoaderPlugin()
    ]
}