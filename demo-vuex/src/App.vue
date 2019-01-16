<template>
  <div id="app">
    num={{appShowNum}}
    <button @click="changeNum">改变数据</button>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    changeNum () {
      // 一般写代码都不直接提交，除非明知是同步操作，没有后台操作
      // this.$store.commit('addNum', { num: 5 })

      this.$store.dispatch('addNumByServerRate', {num: 10})
    }
  },
  computed: {
    appShowNum () {
      return this.$store.getters.getNum
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
