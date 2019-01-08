<template>
  <header>
      <span @click="goback">&lt;</span>
      <h1 class="page-title">{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'nav-bar',
  props: ['title'],
  data () {
    return {
    }
  },
  methods: {
    goback() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  header {
    display: flex;
    align-items: center;
    color: #333;
    padding: .714286rem;
  }
  span {
    font-size: 1.428571rem;
    margin-right: 10px;
  }
  h1 {
    margin: 0
  }
</style>
