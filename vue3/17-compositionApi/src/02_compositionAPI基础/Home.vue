<template>
  <div>
    {{ readonlyInfo1.name }}
    {{ readonlyInfo2.name }}
    {{ readonlyInfo3 }}
    <button @click="updateState">修改状态</button>
  </div>
</template>

<script>
  import { reactive, ref, readonly } from 'vue'

  export default {
    setup(props, {attrs, slots, emit}) {
      console.log(props)
      console.log(attrs.id, attrs.class, attrs.message)
      console.log(slots)
      console.log(emit)

      // 1.普通对象
      const info1 = {name: "why1"}
      const readonlyInfo1 = readonly(info1)

      // 2.响应式的对象reactive
      const info2 = reactive({
        name: "why2"
      })
      const readonlyInfo2 = readonly(info2)

      // 3.响应式的对象ref
      const info3 = ref("why3");
      const readonlyInfo3 = readonly(info3)

      const updateState = () => {
        // 可以修改
        info3.value = "coderwhy"
        info2.name = 'info2 name'
        info1.name = 'info1 name'

        // 不能修改
        readonlyInfo3.value = 'change info3'
        readonlyInfo2.value = 'change info2'
        readonlyInfo1.value = 'change info1'
      }

      return {
        readonlyInfo1,
        readonlyInfo2,
        readonlyInfo3,
        updateState,
      }
    }
  }
</script>

<style scoped>

</style>