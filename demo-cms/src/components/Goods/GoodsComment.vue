<template>
  <section>
    <nav-bar title="商品评论"/>
    <comment :cid="$route.query.id" />
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
