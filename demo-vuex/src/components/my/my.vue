<template>
  <div>
    this is my component. num is {{num}}
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['num']) // 通过扩展运算符把 this.$store.num 映射到 this.num
  }
}
</script>
