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
# bower install vue vue-router
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

## slot

> 父组件传递的DOM结构, Vue提供的内置组件

- 就是子组件里给DOM留下的坑
- `<子组件>DOM</子组件>`
- slot动态的DOM、props是动态的数据

## 组件生命周期

- `beforeCreate()`
- `created()` 可以操作数据并且可以实现vue->页面的影响
  - 事件函数，钩子函数
  - 应用：发起 `Ajax` 请求

![组件声明周期流程图](./images/lifecycle.png)

## Vue 获取DOM元素

- `$属性`：$refs 获取组件内人元素
- `$parent`: 获取当前组件对象的父组件
- `$children`: 获取子组件
- `$root`: 获取 new Vue 的实例 vm
- `$el`: 组件对象的 DOM 元素

## 路由

### 路由原理

- 传统开发方式：URL改变后立刻发起请求，响应整个页面，渲染整个页面
- SPA 锚点值改变后不会发起请求，发起Ajax请求，局部改变页面数据
  - 页面不跳转 用户体验更好

### SPA

- Single Page Application(单页面应用程序)
- 前段路由
  - 锚点值监视
  - ajax 获取动态数据
  - 核心点事锚点值
- 前段框架：Vue/Angular/Reat 都适合开发单页应用

### vue-router 使用步骤

1. 引入
2. 安装插件
3. 创建路由实例
4. 配置路由规则
5. 将路由对象关联vue
6. 留坑

- router-link to="/xxx" 命名路由
  - 在路由规则对象中加入 name 属性
  - 在 router-link 中 :to="{ name:'xxx'}"

``` js
Vue.use(插件对象); // 过程中会注册一些全局组件及给vm或者组件对象挂在属性

// 给vm及组件对象挂在的方式
object.defineProperty(Vue.prototype, '$router', {
  get: function(){
    return 自己的router对象
  }
})
```

### vue-router 中的对象

- `$route` 路由信息对象，只读对象
- `$router` 路由操作对象，只写对象

- 嵌套路由

- 路由meta元数据 -> meta是对于路由规则是否需要验证权限的配置 (路由数据)
  - 路由对象中和name属性同级 `{ meta: {isChecked:true }}`
- 路由钩子 -> 权限控制的函数执行时期 (前段权限控制)
  - 每次路由匹配后，渲染组件到 router->view之前
  - `router.beforeEach(function(to, from, next) { })`

- 练习
  - 服务端：
    - /login ctx.body = {msg: 'ok'} 前段用jQ发送ajax请求
  - 客户端
    - 接受响应以后，如果OK，localStorage中保存改值
  - 在全局路由守卫中区分/login不验证(meta)，/show 要验证，验证条件就是localStorage中获取

- 编程导航
  - 跳到指定锚点并显示页面 `this.$router.push({ name:'xxx',query:{ id:1 }, params:{ name:'abc' } })`
  - 配置规则：`{ name: 'xxx', path: 'xxx/:name' }`
  - 根据历史记录，前进或后退
    - `this.$router.go(-1|1)` 1：进一步，-1：退一步

- 后端路由：url + 请求方式
- 前段路由：url(锚点值) + innerHTML

## axios

> 基于 http 客户端的 promise，面向浏览器和 NodeJS

- 浏览器端发起XMLHttpRequests请求
- Node发起http请求
- 支持Promise API
- 拦截请求和返回
- 转化请求和返回（数据）
- 取消请求
- 自动转化JSON数据
- 客户端支持低于XSRF（跨站请求伪造）

### setup axios

``` sh
$ npm i axios
$ bower install axios
```

使用CDN

## 拦截器

> 比全局配置优先级更高

- 请求拦截器：在发起请求之前，做的处理
  - 案例：显示loadding图标, 请求头：附带 客户端cookie
- 响应拦截器：响应之后，做的处理
  - 案例：去掉loadding图标, 响应头：存储服务器的cookie
- 单请求配置 options: `axios.post(url, data, options)`
- 全局配置 defaults: this.$axios.defaults
- config: 请求拦截器中的参数
- response.config : 响应拦截器中的参数
- options:
  - baseURL 基础URL路径
  - params 查询字符串（对象）
  - transformRequest: function(post请求数据传递的数据) {} 转换请求体数据
  - transformResponse: function(re) { 自己转换相应回来的数据 } 转换响应体数据
  - headers 请求头信息
  - data 请求体数据
  - timeout 请求超时，请求多久以后没有响应算是超时（毫秒）

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

## webpack

### 历史介绍

- 2009年初，CommonJS 规范还未出来，此时前段开发人员编写的代码都是非模块化的。文件加载顺序所需带来的依赖问题

- NodeJS开启了JS全栈入门，而RequireJS在国外带动着前段逐步实现模块化
  - 国内seaJS大力推广
  - **AMD规范**，具体实现是 requrejs define('模块id', [模块依赖1,模块依赖2],function(){return;}) ajax请求文件并加载
  - **CommonJS** || CMD 规范 seajs淘伯
    - CommonJS 和CMD非常相似
      - CMD requrie/module.exports
    - CommonJS 是js在后端语言的规范：模块、文件操作、操作系统底层
    - CMD 模块定义
  - **UMD** 通用模块定义，一种既能兼容AMD也能兼容CommonJS也能兼容浏览器运行的万能代码
- **npm/bower** 集中包管理的方式备受青睐，12年的browserify/webpack 诞生
  - npm 是下载前段后端JS代码
  - **bower**只能下载前段的JS代码，bower在下载bootstrap的时候会自动的下载依赖库（下载jQuery）
  - **browserify** 解决让require可以运行在浏览器，分析require的关系，组装代码
  - webpack 打包工具，占市场主流

### UMD 规范

``` js
(function(root, factory){
  if (typeof exports === 'object') {
    module.exports = factory(); // commonjs环境下能拿到返回值
  } else if(typeof define === 'function') {
    define(factory);  // define(function(){return 'a'}) AMD
  } else {
    window.eventUtil = factory();
  }
})(this, function(){
  // module
  return {

    // 具体模块代码
    addEvent: function(el, type, handle) {
      // ...
    },
    removeEvent: function(el, type, handle) {
      // ...
    }
  }
})
```

### webpack 打包模块的源码

1. 把所有模块的代码放入到函数中，用一个数组保存起来
2. 根据require时传入的数组索引，能知道需要哪一段代码
3. 从数组中，根据索引取出包含我们代码的函数
4. 执行该函数，传入一个对象 module.exports
5. 我们的代码，按照约定，正好是用 module.exports = 'xxx' 进行赋值
6. 调用函数结束后，module.exports 从原来的空对象，就有值了
7. 最终 return module.exports; 作为require函数的返回值

### css 打包

```sh
css样式嵌入到html页面中（缺少style标签）
$ npm i css-loader -S

style标签模块
$ npm i style-loader -S

less转css
$ npm i less less-loader -S

```

### img 打包

```sh
$ npm i file-loader -S
$ npm i url-loader -S
```

### html

```sh
$ npm i html-webpack-plugin -S
```

## Error: Cannot find module 'webpack/lib/node/NodeTemplatePlugin'

是因为全局安装webpack导致的

`npm install webpack`

### webpack-dev-server

``` sh
$ npm i webpack-dev-server@2.9.0 -S
```

- --open 自动打开浏览器
- --hot 热更新，不在刷新的情况下替换，CSS样式
- --inline, 自动刷新
- --port 9999 指定端口
- --process 显示编译进度

### ES6浏览器下兼容

- babel-core: babel核心api的模块
  - babel.transform：用于字符串转码得到AST
- babel-loader 对接webapck
- babel-preset-env 预设和环境,包含ES6/ES7
  - 早起低版本：babel-preset-es6
  - 处理ES7：babel-preset-es2015
- babel-plugin-transform-runtime

``` sh
$ npm i babel-core babel-loader babel-preset-env babel-plugin-transform-runtime -S
```

`Module build failed: Error: Cannot find module '@babel/core'`

解决：
``` sh
$ npm uninstall babel-loader
$ npm install babel-loader@7.1.5 -S
```