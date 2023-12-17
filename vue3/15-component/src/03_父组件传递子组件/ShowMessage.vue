<template>
  <section>
    <!-- v-bind="$attrs" 访问父组件传递的非props属性和值 -->
    <h2 v-bind="$attrs">
      {{title}} - [{{ $attrs }}]
    </h2>
    <p>{{content}}</p>
    {{ counter > 0 ? counter : '' }}


    info: {{ info }}
  </section>
</template>

<script>
  export default {
    // props: ['title', 'content']
    inheritAttrs: false, // 不希望组件的根元素section继承attribute(父组件传递的属性和值)
    props: {
      title: String,
      content: {
        type: String,
        required: true,
        default: "123"
      },
      counter: {
        type: Number
      },
      // 默认值对象
      info: {
        type: Object,
        default() {
          return {name: "why"} // 对象或数组默认值必须是从一个工厂函数获取
        }
      },
      messageInfo: {
        type: String
      }
    }
  }
</script>

<style scoped>

</style>