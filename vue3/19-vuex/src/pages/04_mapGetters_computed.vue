<template>
  <div>
    <p>总价值($store.getters.booksTotalPrice): {{ $store.getters.booksTotalPrice }}元</p>
    <p>总价打折后: {{ $store.getters.booksDiscountTotalPrice }}元</p>
    <p>数量小于3的价格: {{ $store.getters.booksTotalCountGreaterN(3) }}元</p>
    <p>总价booksTotalPrice={{ booksTotalPrice }}元</p>
    <p>打打折discount={{ discount }}元</p>
    <hr>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(["booksTotalPrice"]),
      ...mapGetters({
        discount: "booksDiscountTotalPrice"
      })
    },
    setup() {
      
    }
  }
</script>

<style scoped>

</style>