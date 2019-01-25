<template>
  <header :class="$style.mainHeader">
    <h1>Todo</h1>
  </header>
</template>
<script>
export default {
  computed: {
    $style () {
      return {
        mainHeader: ''
      }
    }
  }
}
</script>
<style lang="stylus" module>
  .main-header
    text-align center
    h1
      font-size 100px
      color rgba(175,47,47,0.4)
      font-weight 400
      margin 20px
</style>

<docs>
#123 = 456
</docs>