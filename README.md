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

- dist/vue.js (所有能支持的模块：支持adm/comonjs/es6/umd(通用模块机制))
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
- `v-for="(item,index) in arr" :class="index"`
- 数组：item,index
- 对象：value,key,index

## 组件渲染

### 父子组件传值（父传子）

1. 父用子的时候通过属性传值
2. 子要声明 `props:['属性名']` 来接受
3. 收到后在`template`或js的`this.属性名` 直接使用
4. 常量传递直接用，变量传递加冒号
5. 父用子，先有子，声明子，使用子
6. 父传子，父传子(属性)， 子声明(收)，子直接用(就是自己的一样)

### 注册全局组件

> 应用场景：多次使用的公共性功能的组件，就可以注册成全局组件，减少冗余代码

- 全局API: `Vue.component('组件名', 组件对象)`

``` js
// 注册公共全局组件，省去compnents: {xxx:xx}
Vue.component('my-btn', {
  template: `
    <button style="background:red;color:white">按钮</button>
  `
});
```

## 附加功能：过滤器 & 监视改动

### 过滤器

- fiter 全局过滤器
  - `Vue.filter('过滤器', 过滤方式fn)`
- filters 组件自己的过滤器
  - `filters:{'过滤器', 过滤方式fn}`

- 将数据进行添油加醋的操作
- 过滤器分为两种
  - 1.组件内的过滤器（组价内有效）
  - 2.全局过滤器（所有组件共享）
- 先注册，后使用
- 组件内 filters: {过滤器名: 过滤器fn} 最终fn 内通过return 产出最终的数据
- 使用方式是 {{ 原有数据 | 过滤器名 }}
- 需求
  - 页面input框输入字符串，翻转字符串输出，按参数显示label(中英文)
- 过滤器fn
  - 声明 `function(data, argv1, argv2...) {}`
  - 使用 `{{ 数据 | 过滤器名(参数1,参数2) }}`

### 监视改动

- watch 监视单个
- computed 监视多个
  - `computed: {监视的业务名： function(){ return 显示一些内容}}`
  - 使用 `{{ 计算属性的名称 }}`
  - 包含原值不变，缓存不掉函数的优化机制


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