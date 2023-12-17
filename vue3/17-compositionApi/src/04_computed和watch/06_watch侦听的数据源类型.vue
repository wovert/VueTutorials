<template>
  <div>
    <h2 ref="title">{{info.name}}</h2>
    <h2>{{name}}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
  import { ref, reactive, watch } from 'vue';

  export default {
    setup() {
      const info = reactive({name: "why", age: 18})

      // 1.侦听watch时,传入一个getter函数 监听info.name属性变化
      watch(() => info.name, (newValue, oldValue) => {
        console.log("1-newValue:", newValue, "oldValue:", oldValue)
      })

      // 2.传入一个可响应式对象info: reactive对象/ref对象
      // 情况一: reactive对象获取到的newValue和oldValue本身都是reactive对象
      watch(info, (newValue, oldValue) => {
        console.log("2--newValue:", newValue, "oldValue:", oldValue);
      })
      
      // 如果希望newValue和oldValue是一个普通的对象
      watch(() => {
        return {...info}
      }, (newValue, oldValue) => {
        console.log("3---newValue:", newValue, "oldValue:", oldValue);
      })

      // 情况二: ref对象获取newValue和oldValue是value值的本身
      const name = ref("why")
      watch(name, (newValue, oldValue) => {
        console.log("4----newValue:", newValue, "oldValue:", oldValue);
      })

      const changeData = () => {
        info.name = "kobe" + new Date().getTime()
        name.value = "why" + new Date().getTime()
      }

      return {
        changeData,
        info,
        name
      }
    }
  }
</script>

<style scoped>

</style>