<template>
  <div id="app">
    <App01 />
    <hr />
    <App02 />
    <hr />
    <App03 />
    <hr />
    <App04 />
    <hr />
    <App05 />
    <hr />
    <App06 />
    <hr />
    <App07 />
    <hr />
    <App08 />
    <hr />
    <App09 />
    <hr />
    <App10 />
    <hr />
    <App11 />
    <hr />
    <App12 />
    <hr />
    <App13 />
    <hr />
    <App14 />
    <hr />
    <App15 />
  </div>
</template>
  
  <script>
    import App01 from './01_组件的拆分和嵌套/App'
    import App02 from './02_组件的css作用域/App'
    import App03 from './03_父组件传递子组件/App'
    import App04 from './04_子组件传递父组件/App'
    import App05 from './05_商品页面的切换/App'
    import App06 from './06_Provide和Inject使用/App'
    import App07 from './07_事件总线的使用/App'
    import App08 from './08_插槽的基本使用/App'
    import App09 from './09_具名插槽的使用/App'
    import App10 from './10_作用域插槽使用/App'
    import App11 from './11_动态组件的使用/App'
    import App12 from './12_异步组件分包/App'
    import App13 from './13_引用元素和组件/App'
    import App14 from './14_组件的生命周期/App'
    import App15 from './15_组件的v-model/App'
    export default {
      components: {
        App01,
        App02,
        App03,
        App04,
        App05,
        App06,
        App07,
        App08,
        App09,
        App10,
        App11,
        App12,
        App13,
        App14,
        App15
      }
    }
  </script>
  
  <style scoped>
  
  </style>