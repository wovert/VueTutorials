<template>
  <div>
    <h2>03_useState封装后使用</h2>
    <p>rootCounter={{rootCounter}}</p>
    <p>rootName={{rootName}}</p>
    <p>age={{sAge}}</p>
    <p>height={{sHeight}}</p>
    <hr>
  </div>
</template>

<script>
  import { useState } from '../hooks/useStateRoot'

  export default {
    setup() {
      const storeState = useState(["rootCounter", "rootName"])
      const storeState2 = useState({
        sAge: state => state.rootAge,
        sHeight: state => state.rootHeight
      })

      return {
        ...storeState,
        ...storeState2
      }
    }
  }
</script>

<style scoped>

</style>