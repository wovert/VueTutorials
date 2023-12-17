<template>
  <div>
    <button v-if="counter < 2" v-why.aaaa.bbbb="'coderwhy'" @click="increment">当前计数: {{counter}}</button>
  </div>
</template>

<script>
  import { ref } from "vue"

  export default {
    // 局部指令
    directives: {
      why: {
        // 绑定元素的 attribute 或事件监听器被应用之前调用
        created(el, bindings, vnode, preVnode) {
          console.log("---------why created", el, bindings, vnode, preVnode)
          console.log('bindings.value=', bindings.value) // coderwhy
          // {aaaa, bbbb}是修饰符
          console.log('bindings.modifiers=', bindings.modifiers)
        },
        // 指令第一次绑定到元素并且在挂载父组件之前调用
        beforeMount() {
          console.log("-----why beforeMount")
        },
        // 绑定元素的父组件被挂载后调用
        mounted() {
          console.log("-----why mounted")
        },
        // 在更新包含组件的 VNode之前调用
        beforeUpdate() {
          console.log("-----why beforeUpdate")
        },
        // 包含组件的Vnode及其子组件的Vnode更新后调用
        updated() {
          console.log("-----why updated")
        },
        beforeUnmount() {
          console.log("-----why beforeUnmount")
        },
        unmounted() {
          console.log("-----why unmounted")
        }
      }
    },
    setup() {
      const counter = ref(0)
      const increment = () => counter.value++

      return {
        counter,
        increment
      }
    }
  }
</script>

<style scoped>

</style>