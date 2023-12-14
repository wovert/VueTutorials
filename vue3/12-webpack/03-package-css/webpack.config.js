const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/, // 匹配规则

                // 1. 加载CSS loader写法（语法糖）
                // loader: 'css-loader',
                // 2. 完整写法
                use: [
                    // 执行顺序从后向前
                    'style-loader',
                    // {loader: 'css-loader'}
                    'css-loader',
                    'postcss-loader'
                    // {
                    //     loader: 'postcss-loader',
                    //     // 指定使用的插件
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [
                    //                 require('autoprefixer')
                    //             ]
                    //         }
                    //     }
                    // }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
}