<template>
  <div class="app">
    <!-- to:#name 指定将其中的内容移动到的目标元素，可以使用选择器 -->
    <teleport to="#why">
      <h2>当前计数</h2>
      <button>+1</button>
      <hello-world></hello-world>
    </teleport>

    <teleport to="#why">
      <span>呵呵呵呵</span>
    </teleport>
    <hello />
    <div>sdfsdf</div>
  </div>
</template>

<script>
  import { getCurrentInstance } from "vue"

  import HelloWorld from './HelloWorld'

  export default {
    components: {
      HelloWorld
    },
    setup() {
      // 获取当前组件实例getCurrentInstance
      const instance = getCurrentInstance()
      console.log(instance.appContext.config.globalProperties.$name)
    },
    mounted() {
      console.log('全局属性=', this.$name)
    },
    methods: {
      foo() {
        console.log('全局属性=', this.$name)
      }
    }
  }
</script>

<style scoped>

</style>