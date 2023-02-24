# webpack


- `-S`或`--save` 开发生产生依赖
- `-D`或`--save-dev` 开发依赖

## 开发依赖包

`npm i -D webpack@5.42.1 webpack-cli@4.9.2`


## 配置 webpack

```
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


```
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

```
npm i -D html-webpack-plugin@5.3.2
```


### loader 加载器

> webpack 默认打包处理以 .js 后缀名结尾的模块。loader 加载器处理非 .js 后缀结尾的模块。协助 webpack 打包处理特定的文件模块

- css-loader 打包处理 .css 相关的文件
- less-loader 打包处理 .less 相关的文件
- babel-loader 打包处理 webpack 无法处理的高级JS语法

```
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