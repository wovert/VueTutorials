<template>
  <div>
    About Page
    <h2>message:{{message}}</h2>

    <!-- <h2>title:{{title}}</h2>
    <h2>当前计数: {{counter}}</h2>
    <button @click="increment">+1</button> -->
  </div>
</template>

<script>
  export default {
    // 必须声明
    props: {
      message: {
        type: String,
        required: true
      }
    },
    // data() {
    //   return {
    //     counter: 10
    //   }
    // },
    /**
     * 参数一: props, 父组件传递过来属性
     */
    // setup函数有哪些参数?
    // setup函数有什么样的返回值
    // setup(props, context) {
    // attrs: 非props
    // emit: 组件内部发出事件
    setup(props, {attrs, slots, emit}) {
      console.log('props=', props)
      console.log('message=', props.message)
      console.log('attrs=', attrs)
      console.log(slots)
      console.log(emit)

      // return {
      //   title: "Hello Home",
      //   counter: 100
      // }
    },
    methods: {
      btnClick() {
        this.$emit("")
      }
    }
  }
</script>

<style scoped>

</style>