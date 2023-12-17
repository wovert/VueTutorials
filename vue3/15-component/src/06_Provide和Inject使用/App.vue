<template>
  <div>
    <home></home>
    <ul>
      <li v-for="(item, index) in names" :key="index">{{ item }}</li>
    </ul>
    <button @click="addName">+name</button>
  </div>
</template>

<script>
  import Home from './Home'
  import { computed } from 'vue'

  export default {
    components: {
      Home
    },
    // 父组件提供数据
    provide() {
      return {
        name: "why",
        age: 18,
        length: computed(() => this.names.length) // ref对象 .value
      }
    },
    data() {
      return {
        names: ["abc", "cba", "nba"]
      }
    },
    methods: {
      addName() {
        this.names.push("why" + this.names.length)
        console.log(this.names)
      }
    }
  }
</script>

<style scoped>

</style>