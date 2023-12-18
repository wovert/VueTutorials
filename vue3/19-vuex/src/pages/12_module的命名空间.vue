<template>
  <div>
    <p>[12]rootCounter={{ $store.state.rootCounter }}</p>
    <p>[12]home.homeCounter={{ $store.state.home.homeCounter }}</p>
    <p>[12]user.homeCounter={{ $store.state.user.userCounter }}</p>

    <h2>home/doubleHomeCouter:{{ $store.getters["home/doubleHomeCounter"] }}</h2>
    <button @click="homeIncrement">home+1</button>
    <button @click="homeIncrementAction">home+1</button>
  </div>
</template>

<script>
  export default {
    methods: {
      homeIncrement() {
        this.$store.commit("home/increment")
      },
      homeIncrementAction() {
        this.$store.dispatch("home/incrementAction")
      }
    }
  }
</script>

<style scoped>

</style>