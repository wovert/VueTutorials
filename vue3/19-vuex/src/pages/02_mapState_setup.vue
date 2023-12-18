<template>
  <div>
    <h2>$store.state.property获取</h2>
    <p>$store.state.rootCounter={{ $store.state.rootCounter }}</p>
    <p>$store.state.rootName={{ $store.state.rootName }}</p>
    <br />
    <h2>mapState获取的</h2>
    <p>rootCounter={{rootCounter}}</p>
    <p>rootName={{rootName}}</p>
    <br />
    <h2>setup的useStore获取的</h2>
    <p>rootAge={{rootAge}}</p>
    <p>rootHeight={{rootHeight}}</p>
    <br />
    <h2>setup的computed别名获取的</h2>
    <p>sCounter={{sCounter}}</p>
    <p>sName={{sName}}</p>
    <hr>
  </div>
</template>

<script>
  import { mapState, useStore } from 'vuex'
  import { computed } from 'vue'

  export default {
    computed: {
      fullName: function() {
        return "1fdasfdasfad"
      },
      ...mapState(["rootCounter", "rootName"])
    },

    setup() {
      const store = useStore()
      const sCounter = computed(() => store.state.rootCounter)
      const sName = computed(() => store.state.rootName)

      // 返回函数
      const storeStateFns = mapState(["rootAge", "rootHeight"])

      // {name: function, age: function, height: function}
      // {name: ref, age: ref, height: ref}
      const storeState = {}
      Object.keys(storeStateFns).forEach(fnKey => {
        // this.$store.state.name?  bind(对象)
        const fn = storeStateFns[fnKey].bind({$store: store})
        storeState[fnKey] = computed(fn)
        console.log('key===', fnKey)
      })

      return {
        sCounter,
        sName,
        ...storeState
      }
    }
  }
</script>

<style scoped>

</style>