# NUXT

- SEO
- 受屏加载
- 性能优化

## 技术栈

- Vue + TS + SSR


## 基础组件

- Layout组件
  - CommonHeader
  - CommonFooter
- 公共组件
  - Toast
  - 骨架图
- Hooks
  - useFormOperates()
  - useFormProperties()

## 功能模块

- 网站国际化
- 用户模块
  - 登录注册页面
  - 登录、注册和退出功能
- 首页模块
  - 房屋列表页面
  - 城市帅选功能
  - 列表分页功能
- 详情模块
  - 房屋详情页面
- 订单中心模块
  - 房屋预定功能
  - 订单中心页面
- 历史足迹模块
  - 浏览器记录功能
  - 历史足迹页面

## Vue3 开发环境配置

- Chrome
  - Plugin: Lighthouse
- VSCode
  - Plugin: 


- nvm 1.1.7
- node 12.20.0(vue), 17.0.0(nuxt3 beta)
- npm 6.14.8(vue3), 8.1.0(nuxt3 beta)
- vite 2.x
- vue3 3.x
- vuex 4.x
- vue-router 4.x
- element-plus 1.2.0-beta.5

Tips: VSCode 禁用Vetur, 因为不支持 script setup  语法

## Vite

```
npm 6.x
预设模板(vue-ts)
npm init vite@latest airbnb-ssr --template  vue-ts

npm 7.x
预设模板(vue-ts)
npm init vite@latest airbnb-ssr -- --template  vue-ts


cd airbnb-ssr
npm i
npm run dev
```


## vue-router4

```
npm i vue-router@next -S
```

## element-plus


```
npm i element-plus -S
```

### 按需加载

- 依赖包
```
npm i -D unplugin-vue-components unplugin-auto-import
```

## ESLint

```
npm i eslint -D
npx eslint --init
```