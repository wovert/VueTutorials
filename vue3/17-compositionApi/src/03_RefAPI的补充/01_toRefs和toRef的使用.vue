<template>
  <div>
    <h2>{{name}}-{{age}}</h2>
    <h2>{{info.name}}-{{info.age}}</h2>
    <button @click="changeAge">修改age</button>
    <button @click="changeName">修改name</button>
  </div>
</template>

<script>
  import { reactive, toRefs, toRef } from 'vue';

  export default {
    setup() {
      const info = reactive({name: "why", age: 18})
      // 1.toRefs: 将reactive对象中的所有属性都转成ref, 建立链接
      let { name, age } = toRefs(info);
      // 2.toRef: 对其中一个属性进行转换ref, 建立链接
      // let { name } = info
      // let age = toRef(info, "age")

      const changeAge = () => {
        age.value++
      }
      const changeName = () => {
        name = 'name' + new Date().getTime()
        info.name = 'name' + new Date().getTime()
      }

      return {
        info,
        name,
        age,
        changeAge,
        changeName
      }
    }
  }
</script>

<style scoped>

</style>