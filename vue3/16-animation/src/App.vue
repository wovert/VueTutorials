<template>
  <div id="app">
    <App01One />
    <hr />
    <App01Two />
    <hr />
    <App01Three />
    <hr />
    <App01Four/>
    <hr />
    <App01 />
    <hr />
    <App02One />
    <hr />
    <App02Two />
    <hr />
    <App02Three />
    <hr />
    <App02Four />
    <hr />
    <App03One />
    <hr />
    <App03Two />
  </div>
</template>
  
  <script>
    import App01One from './01_动画的基本使用/01_过渡动画的使用.vue'
    import App01Two from './01_动画的基本使用/02_animation动画.vue'
    import App01Three from './01_动画的基本使用/03_type和duration属性.vue'
    import App01Four from './01_动画的基本使用/04_两个元素切换mode.vue'
    import App01 from './01_动画的基本使用/App'
    import App02One from './02_结合三方库使用/01_结合animate使用'
    import App02Two from './02_结合三方库使用/02_生命周期钩子'
    import App02Three from './02_结合三方库使用/03_结合gsap使用'
    import App02Four from './02_结合三方库使用/04_gsap数字递增动画'
    import App03One from './03_列表动画的使用/01_transition-group的使用'
    import App03Two from './03_列表动画的使用/02_列表的交替动画'
    export default {
      components: {
        App01One,
        App01Two,
        App01Three,
        App01Four,
        App02One,
        App02Two,
        App02Three,
        App02Four,
        App03One,
        App03Two
      }
    }
  </script>
  
  <style scoped>
  
  </style>