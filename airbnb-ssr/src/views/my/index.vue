<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
console.log(route.query)

</script>

<template>
  <div>
    <h1>{{ $t('message.my') }}</h1>

    <button @click="()=>router.push({name: 'home', params: {id: 2}})">{{ $t('message.home') }}</button>
  </div>
</template>

<style scoped>

</style>
