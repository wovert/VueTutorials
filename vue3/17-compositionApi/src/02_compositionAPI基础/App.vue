<template>
  <div>
    <!-- <about message="父组件消息" id="1004" class="about-name"></about> -->
    <home message="hahahaha" id="aaa" class="bbbb"></home>
    <hr />
    <!-- <com2 message="消息内容" id="aaa" class="bbbb"></com2>
    <hr />
    <App02Two />
    <hr /> -->
    <!-- <App02Three /> -->
    <!-- <hr />
    <App02Four />
    <hr /> -->
    <App02Five />
    <hr />
    
    <App02Six />
    <hr />
  </div>
</template>

<script>
  import About from './About.vue'
  import Home from './Home'
  import Com2 from './02_setup的参数.vue'
  import App02One from './01_OptionsAPI的缺点'
  import App02Three from './03_setup的返回值'
  import App02Four from './04_reactiveAPI使用'
  import App02Five from './05_refAPI使用'
  import App02Six from './06_ref的浅层解包'


  export default {
    components: {
      About,
      Home,
      Com2,
      App02One,
      App02Three,
      App02Four,
      App02Five,
      App02Six
    }
  } 
</script>

<style scoped>

</style>