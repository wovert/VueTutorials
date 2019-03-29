# vue+webpack多环境打包配置（不同环境不同命令）

> 以前在打包项目，会写三个环境地址，打包前都需要手动切换地址，实现多环境打包配置后可以省掉这一步。

## 1.在根目录下 的config文件夹下新建`test.env.js`文件

```sh
# vim config/test.env.js
```

```js
'use strict'
module.exports = {
  NODE_ENV: '"testing"',
  ENV_CONFIG: '"test"',
  API_ROOT: '"http://api.test.com"'
}
```

## 2.修改config文件夹下的prod.env.js文件

```js
// 源代码
'use strict'
module.exports = {
  NODE_ENV: '"production"'
}

// 修改后

'use strict'
module.exports = {
  NODE_ENV: '"production"',
  ENV_CONFIG: '"prod"',
  API_ROOT: '"https://api.prod.com"'
}
```

注意：NODE_ENV与ENV_CONFIG的参数都是单引号包双引号，否则会报错

## 3.修改build文件夹下的webpack.prod.conf.js

```js
// const env = require('../config/prod.env')
const env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : require('../config/prod.env')
```

## 4.修改config文件夹下的index.js文件中的build部分的代码

```js
// 原代码
build: {
  index: path.resolve(__dirname, '../dist/index.html'),

// 修改后
  testEnv: require('./test.env'), // 新增
  prodEnv: require('./prod.env'), // 新增
  index: path.resolve(__dirname, '../dist/index.html'),
```

## 5.确认安装cross-env （cross-env能跨平台地设置及使用环境变量）

windows不支持NODE_ENV=development的设置方式。在windows平台下使用类似于: NODE_ENV=production的命令行指令会卡住，windows平台与POSIX在使用命令行时有许多区别（例如在POSIX，使用$ENV_VAR,在windows，使用%ENV_VAR%。。。）。cross-env无需担心跨平台问题

npm安装方式：`npm i --save-dev cross-env`

## 6.修改build文件夹下的build.js

```js
// 原代码
process.env.NODE_ENV = 'production'

// 修改后
process.env.NODE_ENV = 'production' // 此处注释掉
// const spinner = ora('building for production...') // 此处修改成下面代码
const spinner = ora('building for' + process.env.NODE_ENV + 'of' + process.env.ENV_CONFIG + 'mode...')
```

## 7.修改根目录下的package.json的scripts

```json
"build-test": "cross-env NODE_ENV=testing ENV_CONFIG=test node build/build.js", // 新增
"build-prod": "cross-env NODE_ENV=production ENV_CONFIG=prod node build/build.js" // 新增
```

## 8.在根目录的src下面新增一个config目录和js文件用作配置接口参数

`# vim src/config/config.js`

```js

// 注：下面的baseURL地址为假地址，可以将它们打印出来查看是否打包正确
let baseURL = ''
if (process.env.NODE_ENV === 'development') {
  baseURL = 'https://domain.com/dev' // 开发
} else if (process.env.NODE_ENV === 'testing') {
  baseURL = 'https://domain.com/test' // 测试
} else if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://domain.com/prod' // 线上环境
}

export {
  baseURL
}
```

## 9.打包时可能会遇到的问题

### 9.1. 打包完毕后可能会有出现页面空白

页面空白时，先F12查看是否路径错误，

若路径错误，则需将 根目录`config`下`index.js`中的`build`的`assetsPublicPath:'/'` 改为：`assetsPublicPath: './'`

但是此时会有另外一个问题，使用 `npm run build-test` 的时候 ，因为没有配置`testing`时的路径，因此会默认是`'/'`，此时可以在根目录`build`文件夹下的`webpack.base.conf.js`的output中增加一个判断，将`testing`的路径指定到`prod`

```js

// 原代码
output: {
  path: config.build.assetsRoot,
  filename: '[name].js',
  publicPath: process.env.NODE_ENV === 'production'
    ? config.build.assetsPublicPath
    : config.dev.assetsPublicPath
}

// 修改后：
output: {
  path: config.build.assetsRoot,
  filename: '[name].js',
  publicPath: process.env.NODE_ENV === 'production'
    ? config.build.assetsPublicPath
    : (process.env.NODE_ENV === 'testing' ? config.build.assetsPublicPath : config.dev.assetsPublicPath) //增加判断
}
```

### 9.2. 为了防止万一

> 可以将配置开发环境和prod环境的相关判断中都加上testing环境的判断：根目录下build文件夹下的`vue-loader.conf.js`和`utils.js`文件 ，当然现在不改还没有发现问题

如果想另外配置test环境，可以在根目录`build`文件夹下新建`webpack.test.conf.js`和`test.js`，可以根据prod的修改，此时得修改 各个地方关于环境的判断

### 9.3 此时，打包项目后，打开`index.html`文件，项目中的一些图标可能会是404，这时修改`build`文件夹下的`utils.js`文件

```js
if (options.extract) {
  return ExtractTextPlugin.extract({
    use: loaders,
    publicPath: '../../', // 增加
    fallback: 'vue-style-loader'
  })
} else {
  return ['vue-style-loader'].concat(loaders)
}
```

## 10.打包项目

```sh
测试环境
# npm run build-test

生产环境
# npm run build-prod
```