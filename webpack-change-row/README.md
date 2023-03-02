# webpack


- `-S`或`--save` 开发生产生依赖
- `-D`或`--save-dev` 开发依赖

## 开发依赖包

`npm i -D webpack@5.42.1 webpack-cli@4.9.2`


## 配置 webpack

```js
vim webpack.config.js
module.export = {
    mode: 'development' // 构建模式：development or production
}

vim package.json
"scripts": {
    "dev": "webpack --mode=development"
}
```

## 使用 webpack

webpack 运行时读取 webapck.config.js 文件


### 打包的默认约定 (webpack 4.x/5.x)

- 默认打包入口文件为 src/index.js
- 默认的输出文件路径为 dist/main.js

- 修改默认约定
  - entry
  - output

### webpack-dev-serer 插件

> 监听源代码，自动项目的打包和构建


```js
npm i -D webpack-dev-server@3.11.2

vim package.json
"dev": "webpack serve"

npm run dev 重新进行项目的打包
```

实时打包的 HTTP 服务器

生成的文件存储在内存中


### html-webpack-plugin

> 默认引擎插件，插件自定制 index.html 页面的内容


- 目的 
 - 复制 src/index.html 文件到项目根目录了中的 ./index.html，也被放到了**内存中** 
 - HTML 插件生成的 index.html 页面，**自动注入打包**的 bundle.js 文件

```sh
npm i -D html-webpack-plugin@5.3.2
```


### loader 加载器

> webpack 默认打包处理以 .js 后缀名结尾的模块。loader 加载器处理非 .js 后缀结尾的模块。协助 webpack 打包处理特定的文件模块

- css-loader 打包处理 .css 相关的文件
- less-loader 打包处理 .less 相关的文件
- babel-loader 打包处理 webpack 无法处理的高级JS语法

```js
npm i -D style-loader@3.3.1 css-loader@5.2.7

// 所有第三方文件模块匹配的规则
module: {
    rules: { // 文件后缀名的匹配规则
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    }
}
```




- less

```
less 是 less-loader 内置依赖项
npm i -D  less-loader@10.2.0 less@4.1.3
```

- scss
```
npm install --save-dev sass-loader
//因为sass-loader依赖于node-sass，所以还要安装node-sass
npm install --save-dev node-sass
```

### base64 img

> 不需要网络请求下载

- 推荐300K图片

```
npm i -D url-loader file-loader
```

### babel-loader

> Webapck 只能打包处理一部分 

```
npm i -D babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D


{
    test: /\.js$/,
    use: 'babel-loader',
    exclude: /node_modules/
}
```

- 配置 babel-loader（项目根目录下创建名为bable.config.js 配置文件）

```
module.exports = {
  // 声明 babel 可用的插件
  plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
}

```

[babel配置](https://babeljs.io/docs/babel-plugin-proposal-decorators)

## 配置 build
- package.json
  - "build": "webpack --mode production"

--mode 覆盖配置文件中的mode参数

```sh
# npm run build
```

生成压缩后的 dist 目录

## 优化图片和JS存放目录

```js
- webpack.config.js
output: {
    filename: 'js/bundle.js'
}

url-loader?limit=xxx&outputpath=images
```


## 打包之前清空 dist 目录



```
npm i clean-webpack-plugin -D
- webpack.config.js
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

plugins: [htmlPlugin, new CleanWebpackPlugin]
```

## sourcemap

> 一个信息文件，存储位置信息。文件中存储着压缩混淆后代码，所对应的转换前的位置。出错的时候，除错工具直接显示原始代码，而不是转换后的代码，极大方便调试。


开发环境下默认生成的 Source Map ，记录的时生成后的代码的位置。导致运行时报错的行数与源代码的行数不一致的问题。

- 开发环境配置（精准定位到具体的错误行）
```js
module.exports = {
  devtool: 'eval-source-map'
}
```

- 生产环境下，如果省略了 devtool 选项，则最终生成的文件中不包含 Source Map。能够防止原始代码通过 Source Map 的形式暴漏给其他别有用途的人。


- 生产环境只定位行数不爆露源码提高网站安全性:
  - 1. 关闭 Sourcemap
  - 2. `devtool: 'nosources-source-map'`


- 不推荐：`devtool: 'source-map'` 发布后的错误调试可以看到源代码

