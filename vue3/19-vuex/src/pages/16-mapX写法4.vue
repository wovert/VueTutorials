<template>
  <div>
    <h1>mapX写法5</h1>
    <p>Home:{{ $store.state.rootCounter }}</p>
    <p>homeCounter={{ homeCounter }}</p>
    <p>doubleHomeCounter={{ doubleHomeCounter }}</p>
    <button @click="increment">home+1</button>
    <button @click="incrementAction">home+1(异步)</button><br />
  </div>
</template>
<script>
  import { useState, useGetters } from '../hooks/index'
  import { mapMutations, mapActions } from 'vuex'

  export default {

    setup() {
      // {homeCounter: function}
      const state = useState(["rootCounter"])
      const homeState = useState('home', ["homeCounter"])
      const rootGetters = useGetters(["doubleIncrement"])
      const getters = useGetters("home", ["doubleHomeCounter"])

      const mutations = mapMutations(["increment"])
      const actions = mapActions(["incrementAction"])

      return {
        ...state,
        ...homeState,
        ...getters,
        ...rootGetters,
        ...mutations,
        ...actions
      }
    }
  }
</script>

<style scoped>

</style>