# Vue

## 前段框架与库的区别？

- jQuery -> DOM 操作 + 请求
- art-template 库 -> 模板引擎
- 框架 = 全方位的功能
  - 简易的DOM体验+发请求+模板引擎+路由功能
  - 距离：KFC的世界里库就是一个小**套餐**，框架就是**全家桶**
- 代码上的不同
  - 使用库的代码：是调用某个函数，自己把控库的代码
  - 使用框架，其框架在帮我们运行我们编写的代码
    - 1.初始化自身的一些行为
    - 2.执行你说编写的代码
    - 3.释放一些资源

## Vue 起步

1. 引包
2. 启动 `new Vue({el:目的地, template: 模板内容});`
3. options
  + 目的地 el
  + 内容 tempalte
  + 数据 data

## 安装vue

``` sh
# mkdir demo01
# cd demo01
# bower init
# bower install
# bower install vue
```

## Vue的文件介绍

- dist/vue.js (所有能支持的模块)
  - 支持所有模块，vue.min.js是压缩后的，初学引入vue.js有提示
- dist/vue.common.js (CommonJS模块化代码)
- dist/vue.esm.js (ES6模块化代码)
  - dist/vue.esm.browser.js (基于浏览器的ES6模块化代码)
- dist/vue.min.js (压缩后的代码)
- dist/vue.runtime.js (运行时，和vue.js要小30%，阉割版)

## 插值表达式

- {{ expression }}
  - 对象： {不要连续3个{{ {name:'jack'} }}}
  - 字符串：{{ 'string' }}
  - 判断后的布尔值: {{ true }}
  - 三元表达式: {{ true?'ok':'err'}}
- 可以用于页面中简单粗暴的表达式
- 注意：必须在 data 这个函数中返回的对象中声明

## 指令

- 在 Vue 中提供了一些对于**页面+数据**的更为方便的**操作**，这些操作就是指令
  - 类似于HTML页面中的属性 `<div v-xxx></div>`
- `v-xx`开头的就叫做指令
- 指令中**封装了DOM行为**，结合属性作为一个暗号，暗号有对应的值，根据不同的值，框架会进行相关DOM操作的绑定

### 常用指令

- `v-text` 元素的 `innerText`属性必须是双标签
- `v-html` `元素的 innerHTML`
- `v-if` 判断是否**插入或移除**这个元素
- `v-else-if`
- `v-else`
- `v-show` **显示/隐藏元素**，如果确定要隐藏，会给元素的style加上 `display:none`
- `v-bind` 属性绑定
  - 给元素的属性赋值 `<div file="{{ varible }}"></div>`
    - 可以给已经存在的属性赋值 input value
    - 可以给自定义属性赋值 mydata
  - 语法在元素上 `v-bind:属性名="常量||变量名"`
  - 简写形式：`:属性名="变量名"`
- `v-on` 事件绑定
  - 自定义原生事件的给按钮添加 click 并让使用变量的样式改变
  - 普通刑事：`v-on:原生事件名="表达式||函数名"`
  - 简写形式：`@原生事件名="表达式"`

- **v-bind** 可以给任何属性赋值，是从Vue到页面的单项数据流
- **v-model** 只能给具备value属性的元素进行双向数据绑定（**必须使用value属性的元素**）





## vue-cli

> A simple CLI for scaffolding Vue.js projects.

[vue-cli](https://github.com/vuejs/vue-cli/tree/v2#vue-cli--)

### 全局安装 vue-cli

``` node
# npm install vue-cli -g
# vue -V
2.9.6
```

### Usage

``` node
# vue init <template-name> <project-name>
```

exmpale : `# vue init webpack my-project`

- template-name 模板名称
  - webpack: - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.
  - webpack-simple
  - browserify
  - browserify-simple
  - pwa
  - simple

### Custom Templates

`# vue init username/repo my-project`

### 项目构建实例1

1. 安装项目构建脚手架

``` node
# vue init webpack helloworld
# cd helloworld
# npm run dev
```

2. 浏览器输入 `http://localhost:8080`

``` node
dependecies: {
  "vue": "^2.0.1"
}
安装生产环境中的 Vue
# cnpm install --prduction
```

## vue-loader 搭建自己 webpack

1. [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack) Fork到我的项目

2. 安装自定义模板

`# vim init wovert/webpack temp`