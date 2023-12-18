<template>
  <div>
    <h2>{{info}}</h2>
    <h2>{{info2}}</h2>
    <button @click="changeInfo">修改Info</button>
  </div>
</template>

<script>
  import { ref, shallowRef, triggerRef } from 'vue'

  export default {
    setup() {
      const info = shallowRef({name: "why"})
      const info2 = shallowRef(100)

      const changeInfo = () => {
        info.value.name = "james" + new Date().getTime()
        info2.value = new Date().getTime()
        triggerRef(info) // 手动触发 shallowRef相关联的副作用
      }

      return {
        info,
        info2,
        changeInfo
      }
    }
  }
</script>

<style scoped>

</style>