<template>
  <div>
    <p>总价值($store.getters.booksTotalPrice): {{ $store.getters.booksTotalPrice }}元</p>
    <p>总价打折后: {{ $store.getters.booksDiscountTotalPrice }}元</p>
    <p>数量小于3的价格: {{ $store.getters.booksTotalCountGreaterN(3) }}元</p>
    <p>总价booksTotalPrice={{ booksTotalPrice }}元</p>
    <p>打打折discount={{ discount }}元</p>
    <p>小于等于3的总价格={{ greaterTwoTotalPrice(3) }}元</p>
  </div>
</template>

<script>
  import { useGetters } from '../hooks/useGettersRoot'

  export default {
    computed: {

    },
    setup() {
      const storeGetters = useGetters(["booksTotalPrice", "booksDiscountTotalPrice"])

      const storeGetters2 = useGetters({
        discount: "booksDiscountTotalPrice",
        greaterTwoTotalPrice: "booksTotalCountGreaterN",
      })
      return {
        ...storeGetters,
        ...storeGetters2
      }
    }
  }
</script>

<style scoped>

</style>