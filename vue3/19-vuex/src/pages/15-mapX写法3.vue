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
  import { createNamespacedHelpers } from "vuex"
  // import { useState, useGetters } from '../hooks/index'
  // 3.写法三:createNamespacedHelpers
  const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers("home")

  export default {
    computed: {
      ...mapState(["homeCounter"]),
      ...mapGetters(["doubleHomeCounter"])
    },
    methods: {
      ...mapMutations(["increment"]),
      ...mapActions(["incrementAction"]),
    },

    setup() {
      // {homeCounter: function}
      // const state = useState(["rootCounter"])
      // const rootGetters = useGetters(["doubleRootCounter"])
      // const getters = useGetters("home", ["doubleHomeCounter"])

      // const mutations = mapMutations(["increment"])
      // const actions = mapActions(["incrementAction"])

      return {
        // ...state,
        // ...getters,
        // ...rootGetters
        // ...mutations,
        // ...actions
      }
    }
  }
</script>

<style scoped>

</style>