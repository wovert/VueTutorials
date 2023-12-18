<template>
  <div>
    <p>$store.state.rootCounter={{ $store.state.rootCounter }}</p>
    <p>mapState获取rootCounter别名:{{ sCounter }}</p>
    <p>mapState获取rootName别名:{{ sName }}</p>
    <!-- <p>Home:{{ age }}</p>
    <p>Home:{{ height }}</p> -->
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      fullName() {
        return "Kobe Bryant"
      },

      // 其他的计算属性, 从state获取
      // ...mapState(["counter", "name", "age", "height"])

      // 自定义名称
      ...mapState({
        sCounter: state => state.rootCounter,
        sName: state => state.rootName
      })
    }
  }
</script>

<style scoped>

</style>