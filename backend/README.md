# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


# backend

## 環境

- Node12+

## 全局安裝vue脚手架

```


npm config set strict-ssl false
npm uninstall vue-cli -g 必须卸载

npm i @vue/cli -g
vue --version 目前4.x以上版本支持創建Vue3項目
npm update -g @vue/cli


```

## 创建项目

```
vue create projecName
yarn create vite projectName
```

## 项目依赖

```
生产依赖
yarn add vue-router@next vuex@next element-plus axios -S
开发依赖
yarn add sass -D
```

## VSCode 插件

- Eslint
- Vetur
- TypeScript
- Prettier