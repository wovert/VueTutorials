<template>
  <div class="app">
    <div class="cover"></div>
    <Header></Header>
    <router-link to="/app/123">app123</router-link>
    <router-link to="/app/456">app456</router-link>
    <router-link :to="{name: 'app'}">app</router-link>
    
    <router-link :to="{name: 'login'}">login</router-link>
    <!-- <router-link to="/login/exact">login exact</router-link> -->
    <transition name="fade">
      <router-view />
    </transition>

    <Footer></Footer>
    <router-view name="a" />
    <!-- <Todo></Todo> -->
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'

// console.log(Header.__docs)

export default {
  components: {
    Header,
    Footer,
    // Todo
  },
  data () {
    return {

    }
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>

<style lang="stylus" scoped>
.app
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  .cover
    position absolute
    left 0
    right 0
    top 0
    bottom 0   
    background-color #999 
    opacity 0.2
    z-index -1
  .fade-enter-active, .fade-leave-active
    transition: opacity 500ms
  .face-enter, .fade-leave-to
    opacity: 0
</style>
