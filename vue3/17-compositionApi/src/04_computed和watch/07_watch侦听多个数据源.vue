<template>
  <div>
    <h2 ref="title">{{info.name}}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
  import { ref, reactive, watch } from 'vue'

  export default {
    setup() {
      // 1.定义可响应式的对象
      const info = reactive({name: "Alice", age: 18})
      const name = ref("Box")

      // 2.侦听器watch
      watch([() => ({...info}), name], ([newInfo, newName], [oldInfo, oldName]) => {
        console.log('newInfo=', newInfo)
        console.log('newName=', newName)
        console.log('oldInfo=', oldInfo)
        console.log('oldName=', oldName)
      })

      const changeData = () => {
        info.name = "kobe"
        name.value = 'other' + new Date().getTime()
      }

      return {
        changeData,
        info
      }
    }
  }
</script>

<style scoped>

</style>