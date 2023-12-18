<template>
  <div>
    <img src="../../public/ele.png">
    <h2>{{counter}}</h2>
    <button @click="increment">+1</button>
    <p>{{ offsetTop }}</p>
    <div class="box">
      <span>{{ offsetLeft }}</span>
      <h2 class="title" ref="titleRef">{{message}}</h2>
      <span>{{ offsetHeight }}</span>
    </div>
    <button @click="addMessageContent">添加日期</button>
  </div>
</template>

<script>
  import { ref, onUpdated, nextTick } from "vue"

  export default {
    setup() {
      const message = ref("")
      const titleRef = ref(null)
      const offsetHeight = ref(0)
      const offsetTop= ref(0)
      const offsetLeft= ref(0)

      const counter = ref(0)

      const addMessageContent = () => {
        message.value += `[${new Date().getTime()}]`

        offsetHeight.value = titleRef.value.offsetHeight
        offsetTop.value = titleRef.value.offsetTop
        offsetLeft.value = titleRef.value.offsetLeft

        console.log(titleRef.value.offsetHeight)
        console.log(titleRef.value.offsetTop)
        console.log(titleRef.value.offsetLeft)
        console.log('-------------')

        // 更新DOM(message内容)后设置获取DOM元素相关信息
        nextTick(() => {
          console.log(titleRef.value.offsetHeight)
          console.log(titleRef.value.offsetTop)
          console.log(titleRef.value.offsetLeft)

          offsetHeight.value = titleRef.value.offsetHeight
          offsetTop.value = titleRef.value.offsetTop
          offsetLeft.value = titleRef.value.offsetLeft
        })
      }

      const increment = () => {
        for (let i = 0; i < 100; i++) {
          counter.value++
        }
      }

      onUpdated(() => {
        // 只要更新了DOM，这里就可以获取
        // 问题：没有相关的元素更新也会执行此出逻辑
      })

      return {
        message,
        counter,
        increment,
        titleRef,
        offsetHeight,
        offsetTop,
        offsetLeft,
        addMessageContent
      }
    }
  }
</script>

<style scoped>
  .title {
    max-width: 200px;
    background: gold;
    margin: 0;
    height: auto;
  }
  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: green;
    padding: 50px;
    position: relative;
  }
</style>