<template>
  <div class="main">
    <main-banner></main-banner>
    <main-product-list></main-product-list>
  </div>
</template>

<script>
  import MainBanner from './MainBanner'
  import MainProductList from './MainProductList'

  export default {
    components: {
      MainBanner,
      MainProductList
    }
  }
</script>

<style scoped>
</style>
