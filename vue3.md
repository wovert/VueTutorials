# Vue3

## Vue3源代码调试

1. node 16.20.0
2. pnpm 8.12.0
3. git clone https://github.com/vuejs/core.git
4. "dev": "node scripts/dev.js --sourcemap"

## this

- 箭头函数不绑定`this`


## webpack

- 模块化开发
- 高级特性开发效率或者安全性（ES6+， TypeScript）
- Sass, Less, Stylus编写CSS
- 实时监听文件变化，反映到浏览器上，提高开发效率
- 代码压缩、合并

- 以上这些功能借助于脚手架(CLI)
  - **vue-cli, create-react-app, auglar-cli** 都是基于 Webpack 实现支持模块化、less、TypeScript、打包优化等

1. webpack 安装
- webpack
- webpack-cli

```sh
npm install webpack webpack-cli -g
```

- 执行webpack命令，会执行 node_modules下的.bin目录下的webpack
- webpack 在执行时以来webpack-cli，如果没有会报错
- webpack-cli 中代码执行时，webpack进行编译和打包的过程
- 安装webpack时，需要同时安装webpack-cli

- webpack 命令 -> node_modules/.bin/webpack -> 依赖 webpack-cli runCli函数 -> 依赖webpack打包


```sh
cd 12-webpack/01-basic
webpack
....
./src/index.js
./src/js/format.js
```

## loader

> 对模块源代码进行转换

- css文件时一个模块，通过 import 来加载模块
- 加载模块时，webpack 并不知道如何对其进行加载，必须指定对应的loader来完成这个功能

```sh
#1.安装 css loader
pnpm i css-loader -D

#2. 配置loader
vim webpack.config.js


#2.1 配置css-loader 方法1：内联方式
import 'css-loader!../css/style.css'

#2.2 配置css-loader 方法2：配置方式

module: {
    rules: [
        {
            test: /\.css$/, // 匹配规则

            // 1. 加载CSS loader写法（语法糖）
            // loader: 'css-loader',
            // 2. 完整写法
            use: [
                // {loader: 'css-loader'}
                'css-loader'
            ]
        }
    ]
}
```


- css-loader 只负责将.css文件进行解析，并不会将解析后的css插入到页面中
- 插入 style操作，就需要 style-loader

```sh
pnpm i style-loader -D
vim webpack.config.js
  use: [
      // 执行顺序从后向前
      'style-loader',
      // {loader: 'css-loader'}
      'css-loader',
  ]
```

## less

```sh
pnpm i less -D
npx lessc ./src/css/title.less ./src/css/title.css


pnpm i less-loader -D
# less-loader 依赖 lessc
vim webpack.config.js
  {
      test: /\.less$/,
      use: [
          'style-loader',
          'css-loader',
          'less-loader'
      ]
  }
```

## postcss

> 通过JavaScript 转换样式工具

- CSS 的转换和适配
  - 浏览器前缀
  - css 样式重置
- 借助于 PostCSS 对应的插件

- 如何使用？

1. 查找 PostCSS 在构建工具中的扩展，比如 webpack 中的 postcss-loader
2. 选择可以添加需要的 PostCSS 相关的插件


依赖关系：postcss-loader -> postcss -> plugins

### 命令行使用postcss 

```sh
#1.安装postcss
pnpm i postcss postcss-cli -D

#2.安装插件
pnpm i autoprefixer -D

#3.使用postcss工具并制定使用 autoprefixer
npx postcss --use autoprefixer -o end.css ./src/css/style.css
```

### webpack 使用 postcss

```sh
#安装postcss-loader和插件autoprefixer
pnpm i postcss-loader autoprefixer -D
vim webpack.config.js
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
      {
          loader: 'postcss-loader',
          // 指定使用的插件
          options: {
              postcssOptions: {
                  plugins: [
                      require('autoprefixer')
                  ]
              }
          }
      }
  ]
}
```

独立配置 postcss 插件
```sh
vim postcss.config.js
module.exports = {
   plugins: [
      require('autoprefixer')
  ] 
}

vim webapck.config.js

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
```

### postcss-preset-env 插件

> 现代的 CSS 特性，转换为浏览器认识的CSS，并且根据目标浏览器或者运行时环境添加所需要的**polyfill**

- 内置了autoprefixer

```sh
pnpm install postcss-preset-env -D
vim postcss.config.js
  require('autoprefixer') 修改成 require('postcss-preset-env')
```

## sass-loader

```sh
pnpm i sass sass-loader -D

vim webpack.config.js

{
  test: /\.s[ac]ss$/i,
  use: [
    // 将 JS 字符串生成为 style 节点
    'style-loader',
    // 将 CSS 转化成 CommonJS 模块
    'css-loader',
    // 将 Sass 编译成 CSS
    'sass-loader',
  ],
},
```

### stylus-loader

```sh
pnpm i stylus stylus-loader -D

vim webapck.config.js
{
  test: /\.styl$/,
  loader: 'stylus-loader', // 将 Stylus 文件编译为 CSS
},
```

### tailwind


```sh
pnpm i tailwindcss postcss postcss-import  -D
npx tailwindcss init
```