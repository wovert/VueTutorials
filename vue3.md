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