<template>
  <div>
    <h2>User: username={{$route.params.username}}-id={{$route.params.id}}</h2>
  </div>
</template>

<script>
  import { useRoute } from "vue-router"

  export default {
    created() {
      console.log(this.$route.params.username)
    },
    setup() {
      const route = useRoute()
      console.log(route.params.username)
    }
  }
</script>

<style scoped>

</style>