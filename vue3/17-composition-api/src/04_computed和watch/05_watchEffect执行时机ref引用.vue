<template>
  <div>
    <h2 ref="title">哈哈哈{{ title }}</h2>
  </div>
</template>

<script>
  import { ref, watchEffect } from 'vue';

  export default {
    setup() {
      const title = ref(null)
      watchEffect(() => {
        // 挂在完成之后有 HTMLHeadingElement
        console.log('watch title', title.value)
      }, {
        // post: 等待DOM挂载时，给title的ref对象赋值新的值，副作用函数会再次执行
        flush: "post" // 默认时pre, 是立即执行上面回调函数 因此执行两次（第一次值是null）
      })

      return {
        title
      }
    }
  }
</script>

<style scoped>

</style>