<template>
  <div id="app">
    <!-- <hr />
    <App01One />
    <hr />
    <App01Two />
    <hr />
    <App01 />
    <hr />
    <App02 />
    <hr />
    
    <App03One />
    <hr />
    <App03Two />
    <hr />
    <App03Three />
    <hr />
    <App04One />
    <hr />
    <App04Two />
    <hr />
    <App04Three />
    <hr />
    <App04Four />
    <hr />
    <App04Five />
    <hr />
    <App04Six />
    <hr />
    <App04Seven />
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
    <App10 />-->
    <hr />
    <App11 />
    <hr />
    <App12 />
  </div>
</template>
  
  <script>
    import App01One from './01_mixin和extends/01_mixin基本使用.vue'
    import App01Two from './01_mixin和extends/02_mixin合并规则.vue'
    import App01 from './01_mixin和extends/App'

    import App02 from './02_compositionAPI基础/App'

    import App03One from './03_RefAPI的补充/01_toRefs和toRef的使用'
    import App03Two from './03_RefAPI的补充/02_refAPI的补充'
    import App03Three from './03_RefAPI的补充/03_customRef'

    import App04One from './04_computed和watch/01_computed的使用'
    import App04Two from './04_computed和watch/02_watchEffect基本使用'
    import App04Three from './04_computed和watch/03_watchEffect停止侦听'
    import App04Four from './04_computed和watch/04_watchEffect清除副作用'
    import App04Five from './04_computed和watch/05_watchEffect执行时机ref引用'
    import App04Six from './04_computed和watch/06_watch侦听的数据源类型'
    import App04Seven from './04_computed和watch/07_watch侦听多个数据源'
    import App04 from './04_computed和watch/App'


    import App05 from './05_生命周期钩子/App'
    import App06 from './06_Provide和Inject/App'
    import App07 from './07_compositionAPI练习/App'
    import App08 from './08_setup顶层编写方式/App'
    import App09 from './09_render函数的使用/App'
    import App10 from './10_jsx/App'
    import App11 from './11_自定义指令/App'
    import App12 from './12_teleport内置组件/App'

    export default {
      components: {
        App01One,
        App01Two,
        App01,
        App02,
        App03One,
        App03Two,
        App03Three,
        App04One,
        App04Two,
        App04Three,
        App04Four,
        App04Five,
        App04Six,
        App04Seven,
        App04,
        App05,
        App06,
        App07,
        App08,
        App09,
        App10,
        App11,
        App12,
      }
    }
  </script>
  
  <style scoped>
  
  </style>