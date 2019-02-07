# Vue技术体系

## webpack 4 升级

- 版本变化
- 配置变化
- 插件变化

## 正式项目目录结构

- `webpack-merge` 包扩展webpack配置文件
- `vue-style-loader` 包 vue文件中样式文件热更新
  - `style-loader` 效果是一样的
- `rimraf` 包重新打包dist目录是删除目录

## vue + Webpack 工程流搭建

## Vue + Vue-Router + Vuex项目架构

```sh
$ npm i vue-router -S
```

异步加载组件
```sh
$ vim config/router.js
  {
    path: '/app/:id',
    props: true, // :id传递到Todo组件
    name: 'app',
    // component: Todo,
    component: () => import('../views/todo/todo.vue'),
  }
$ npm i babel-plugin-syntax-dynamic-import -D
$ vim .babelrc
  {
    "presets": [
      "env"
    ],
    "plugins": [
      "transform-vue-jsx",
      "syntax-dynamic-import"
    ]
  }
$ npm run dev
```