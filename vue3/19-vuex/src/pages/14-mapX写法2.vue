<template>
  <div>
    <h1>mapX写法2</h1>
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
      ...mapState("home", ["homeCounter"]),
      ...mapGetters("home", ["doubleHomeCounter"])
    },
    methods: {
      ...mapMutations("home", ["increment"]),
      ...mapActions("home", ["incrementAction"]),
    }
  }
</script>

<style scoped>

</style>