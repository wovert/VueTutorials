<template>
  <div>
    <h1>mapX写法1</h1>
    <p>Home:{{ $store.state.rootCounter }}</p>
    <p>{{ homeCounter }}</p>
    <p>{{ doubleHomeCounter }}</p>
    <button @click="increment">home+1</button>
    <button @click="incrementAction">home+1</button><br />
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
  export default {
    computed: {
      ...mapState({
        homeCounter: state => state.home.homeCounter
      }),
      ...mapGetters({
        doubleHomeCounter: "home/doubleHomeCounter"
      })

    },
    methods: {
      ...mapMutations({
        increment: "home/increment"
      }),
      ...mapActions({
        incrementAction: "home/incrementAction"
      }),
    }
  }
</script>

<style scoped>

</style>