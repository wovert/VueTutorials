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

## 打包图片

> webpack5 中内置了 **file-loader、url-loader、raw-loader**, 可以直接通过配置实现常用功能
> webpack5，直接使用资源模块类型（asset module type），来替代这些loader

- url-loader包中包含了file-loader，但是安装的是都要安装url-loader, file-loader
- url-loader 可以将较小的文件，转换成 **base64的URI**

- file-loader: 使用import/reuqire()方式引入一个文件资源，并且把它们输出到指定的目录中

 Webpack5 file-loader、url-loader打包url引入的图片生成两个图片，一个无法加载。

 就算是使用了file-loader的outputPath，也会发现，生成的无效图片并不会进入到outputPath中指定的路径里面。

问题原因： css-loader 6.0.0以上版本。对引入背景图片的url解析方式不一样，导致生成了两个图片（一个正常由file-loader解析生成，一个仅由css-loader解析引入）

- 解决方案1：将css-loader版本由6降到5就行了

- 解决方案2：官方推荐使用asset module 资源模块替换loader
  - 转自官网：javascript
  - asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现。
  - asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现。
  - asset/source 导出资源的源代码。之前通过使用 raw-loader 实现。
  - asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源体积限制实现。

- 解决方案3： 
  -  如果你还想使用url-loader 那么你只需要在url-loader中设置type: 'javascript/auto’即可；
  - 同样的对于页面上的图片的引入我们之前的方法是使用css-loader并且要将url-loader的esModule设置为false，因为我们现在的css-loader引入图片使用的是 commonjs，而url-loader默认使用es6模块化解析，如果不设置为false打包后的图片路径会出现 [object Module]。

```json
{
  test: /\.(png|jpe?g|gif|svg)$/i,
  use: {
      loader: 'url-loader',
      options: {
          outputPath: 'assets/images',
          name: '[name]-[hash:32].[ext][query]',
          esModule: false
      }
  },
  type: 'javascript/auto'
}
```

## plugin

- loader 用于特定**模块类型进行转换**
- plugin **执行更广泛的任务**，比如打包优化、资源管理、环境变量注入等

### CleanWebpackPlugin

> 重新打包时，自动删除之前编译的目录

```sh
#1.安装
pnpm i clean-webpack-plugin -D
#2.配置
vim webpack.config.js

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  plugins: [
      new CleanWebpackPlugin()
  ]
}
```

### HtmlWebpackPlugin

> 最终打包目录里没有index.html入口文件

```sh
#1.安装
pnpm i html-webpack-plugin -D
#2.配置
vim webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  plugins: [
      new HtmlWebpackPlugin()
  ]
}
```


### CopyWebpackPlugin

> 复制  public/favicon.ico等文件到编译目录中

```sh
pnpm i -D copy-webpack-plugin

vim webpack.config.js
module.exports = {
  plugins: [
    new CopyWebpackPlugin({
        // 复制规则
        patterns: [
            {
                from: 'public',
                to: '.', // 目标编译目录
                // 忽略文件
                globOptions: {
                    ignore: [
                        '**/index.html'
                    ]
                }
            }
        ]
    })
  ]
}
```

## babel

> 是工具链，用于旧浏览器或者环境中将ESMAScript 2015+代码转换为向后兼容的JavaScript
> 语法转换、源代码转换等

### babel 命令行使用

> 独立工具（postcss一样）

- 命令行尝试使用babel的依赖库
  - **@babel/core**: Babel**核心代码**
  - **@babel/cli**：**命令行**使用Babel

```sh
pnpm i @babel/core @babel/cli -D

npx babel demo-es6.js --out-dir dist
npx babel demo-es6.js --out-file demo-es5.js
```

如果需要转换箭头函数，就使用箭头函数转换相关的插件

```sh
#安装插件
pnpm i @babel/plugin-transform-arrow-functions -D

#配置插件
npx babel demo-es6.js --out-file demo-es5.js --plugins=@babel/plugin-transform-arrow-functions

# const转换为var
pnpm i @babel/plugin-transform-block-scoping -D

npx babel demo-es6.js --out-file demo-es5.js --plugins=@babel/plugin-transform-arrow-functions,@babel/plugin-transform-block-scoping
```

### babel的预设 preset

```sh
pnpm i @babel/preset-env -D

npx babel demo-es6.js --out-file demo-es5.js --presets=@babel/preset-env
```

使用preset 之后代码首行中增加了 `"use strict"` 

### webpack 配置 babel

```sh
pnpm i @babel/core babel-loader -D

vim webapck.config.js

 {
    test: /\.js$/,
    use: {
        loader: 'babel-loader',
        options: {
            # plugins: [
            #     '@babel/plugin-transform-arrow-functions',
            #     '@babel/plugin-transform-block-scoping',
            # ]
            presets: [
              '@babel/preset-env'
            ]
        }
    }
},
```

### Babel的配置文件

- babel.config.json or .babelrc.json
  - .js/.cjs/.mjs

- babel7 开始使用 babel.config.json

```sh
vim babel.config.json
  module.exports = {
      presets: [
          '@babel/preset-env'
      ]    
  }

vim webpack.config.js
  {
      test: /\.js$/,
      loader: 'babel-loader',
  }
```

## webpack配置vue

```sh
#vue2
pnpm i vue -S

#vue3
pnpm i vue@next -S

vim webpack.config.js


```
### Vue 打包后不同版本解析

- vue(.runtime).global(.prod).js
  - 通过浏览器中的script
  - CDN引入和下载的Vue版本
  - 会暴漏一个全局的Vue使用
- vue(.runtime).esm-browser(.prod).js
  - 通过原生 ES 模块导入使用（<script type="module">）
- vue(.rutnime).esm-bundler.js
  - 用于 webpack, rollup 和 parcel等构建工具
  - 构建工具中模式使用 vue.runtime.esm-bundler.js
  - 需要解析模板 template, 需要手动指定vue.esm-bundler.js
- vue.cjs(.prod).js
  - 服务器端渲染使用。
  - 通过require()在Node.js中使用。


### 运行时+编译器 vs 仅运行时

对应着 runtime+compiler 和 runtime-only。

- 在Vue的开发过程中我们有三种方式来编写DOM元素：
  - 方式一：**template模板**的方式（之前经常使用的方式）。
  - 方式二：**render函数**的方式，使用h函数来编写渲染的内容。
  - 方式三：通过.**vue文件**（SFC）中的template来编写模板。
  
- 三种方式的模板如何处理：
  - 方式二中的h函数可以直接返回一个**虚拟节点**，也就是**Vnode节点**。而方式一和方式三的template都需要有 **特定的代码** 来对其进行解析：

  - 方式三.**vue文件**中的template可以通过在**vue-loader**对其进行编译和处理。

  - 方式一种的**template**我们必须要**通过源码中一部分代码**来进行编译。

因此Vue在选择版本的时候分为运行时+编译器vs仅运行时

**运行时+编译器**包含了对template模板的编译代码，更加完整，但是也**更大**一些；

仅**运行时**没有包含对template版本的编译代码，相对**更小**一些。


### VSCode 对 SFC 文件的支持

> SFC: Single-file components 单文件组件

- 插件1：Vetur，从Vue2支持
- 插件2：Volar，官方推荐的插件

### vue-loader

```sh
#vue2
pnpm i vue-loader -D
pnpm i @vue/vue-template-compiler -D

#vue3
pnpm i vue-loader@next -D
pnpm i @vue/compiler-sfc -D

vim webpack.config.js
  const { VueLoaderPLugin } = require('vue-loader/dist/index')
  
  ....
  rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader',
    },
  ],
  plugins: [
    new VueLoaderPLugin()
  ]
```

## webpack-server

> live sever 

- 自动编译
  - webpack match mode
  - webpack-dev-server(常用)

### webpack watch

> webpack 依赖图中的所有文件，只要一个文件发生了更新，代码将被重新编译

- 开启方式
  - 1. 在启动webpack的命令中，添加`--watch`
  - 2. 导出的配置中，添加`watch: true`


1. 配置方式
```sh
vim package.json
  "build": "webpack --watch"
```

2. 配置方式
```sh
vim webpack.config.js
  ...
  watch: true,
  ...
```

### webpack-dev-server

- webpack watch 没有自动刷新浏览器的功能
- 可以使用VScode使用 live-server 来完成此功能

不使用 live-server 情况下，可以具体  live reloading（实时重新加载） 的方式

```sh
pnpm i webpack-dev-server -D

vim package.json
  "dev": "webpack serve "
vim webpack.config.js
  watch: false

npm run dev
```
webpack-dev-server 编译之后不会写入到任何输出文件，而是将bundle文件保留在内存中。

事实上 webpack-dev-server 使用了 memfs库(以前是memory-fs webpack)



```sh
#配置webpack-dev-server
vim webpack.config.js

```

### HMR

> Hot Module REplacement，模块热替换

- 不重新加载整个页面，保留某些应用程序的状态不丢失
- 只更新变化的内容，节省编译时间
- 修改CSS，JS源代码会立即在浏览器更新

### proxy

> 跨域问题

```sh
pnpm i axios -S

```

### resolve

> 模块如何解析

- resolve可以帮助 webpack从每个 import/require语句中，找到需要引入到合适的模块代码

- webpack 中使用 enhanced-resolve 来解析文件路径

- webpack 解析文件路径
  - 1. 绝对路径
  - 2. 相对路径
    - 使用 import/require的资源文件所处的目录，被认为是上下文目录；
    - 在 import/require 中给定的相对路径，会凭借此上下文路径，来生成模块的绝对路径；

- 如果是一个文件
  - 如果文件具有扩展名，则直接打包文件
  - 否则，将使用 **resolve.extensions** 选项作为文件扩展名解析
- 如果是一个目录
  - 在目录中根据 resolve.mainFiles 配置选项中指定的文件顺序查找；
    - resolve.mainFiles 的默认值 `[index]`
    - 在根据 resolve.extensions 来解析扩展名

## 区分开发环境和生产环境

```sh
pnpm i webpack-merge -D
```

## VueCLI

> 项目的创建和配置，内置了 webpack相关配置

```sh
#全局安装
npm i @vue/cli -g
npm update @vue/cli -g
vue --version

#使用
vue create project-name
```


## Vite

1. 一个开发服务器，基于原生ES模块提供了丰富的内建功能，HMR的速度非常快速
2. 一套构建指令，使用rollup打开代码，并且是预配置的，可以输出成环境的优化过的静态资源



```sh
pnpm i lodash-es
```

1. 某些特定文件类型不能识别（vs,vue）
2. 包之间依赖太多，发送过多的网络请求



```sh
#安装 node > 12+
pnpm i vite -D
npx vite 


pnpm i less postcss postcss-preset-env -D

vim postcss.config.js
module.exports = {
  plubins: [
    require('postcss-preset-env')
  ]
}


pnpm i vue@next -D


#vite对vue提供

#vue3单文件组件支持
npm i @vitejs/plugin-vue -D

#Vue3 JSX支持
npm i @vitejs/plugin-vue-jsx -D

#Vue2支持
npm underfin/vite-plugin-vue2 -D



#插件配置
vim vite.config.js

const vue = require('@vitejs/plugin-vue') 
module.exports = {
  plugins: [
    vue()
  ]
}


pnpm i @vue/compiler-sfc -D
```

## ESbuild 解析

- 超快的构建速度，并且不需要缓存
- 支持ES6和CommonJS模块化
- 支持ES6和 Three Shaking
- 支持 Go、JavaScript的API
- 支持 TypeScript、JSX等语法编译
- 支持 SourceMap;
- 支持代码压缩
- 支持扩展其他插件



- Go语言编写的，直接转换成机器代码，而无需经过字节码
- 充分利用CPU的多内核，尽可能让他们饱和运行



## vite 脚手架

```sh
pnpm create vite

pnpm create vite my-vue-app --template vue



```