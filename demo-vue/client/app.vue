<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <Footer></Footer>
    <Todo></Todo>
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'

console.log(Header.__docs)

export default {
  components: {
    Header,
    Footer,
    Todo
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
#app
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  #cover
    position absolute
    left 0
    right 0
    top 0
    bottom 0   
    background-color #999 
    opacity 0.2
    z-index -1
</style>
