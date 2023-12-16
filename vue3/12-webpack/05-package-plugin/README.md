# env

```sh
npm i webpack webpack-cli -D

#1. 方法1：执行当前项目的webpack
./node_modules/.bin/webpack 

#2. 方法2：npx webpack

#3. 方法3
vim package.json
"scripts": {
  "build": "webpack"
  ...
}
```

`webpack` 执行命令时，自动查找当前执行命令下的 `src/index.js` 文件进行打包

```sh
npx webpack --entry ./src/main.js --output-path ./build
```


## webpack.config.js

```sh
vim webpack.config.js
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        // 绝对路径
        // __dirname 当前文件webpakc.config.js所在的目录
        path: path.resolve(__dirname, "./build"),
        filename: 'main.js'
    }
}

vim package.json
  # 自动识别 webpack.config.js 文件，使用其他文件名命名时指定 --config 参数
  "build": "webpack --config webpack.config.js"
```