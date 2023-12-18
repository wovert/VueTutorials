<template>
  <App01 />
  <hr />
  <App02 />
  <hr />
  <App03 />
  <hr />
  <App04 />
</template>
<script>
import App01 from './01-render基本使用'
import App02 from './02-render函数实现计数器'
import App03 from './03-setup函数实现计数器'
import App04 from './04-render函数使用组件和插槽.vue'

export default {
  components: {
    App01,
    App02,
    App03,
    App04
  }
}
</script>