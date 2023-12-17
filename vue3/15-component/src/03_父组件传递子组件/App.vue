<template>
  <div>
    <show-message id="abc" class="why" title="哈哈哈" content="我是哈哈哈哈" message-info=""></show-message>
    <show-message title="呵呵呵" content="50s"></show-message>
    <show-message :title="title" :content="content"></show-message>


    <show-message :title="message.title" :content="message.content"></show-message>
    
    <!-- 传递整个对象 -->
    <show-message v-bind="message"></show-message>

    <multi-root-element id="1004"></multi-root-element>
  </div>
</template>

<script>
  import ShowMessage from './ShowMessage'
  import MultiRootElement from './MultiRootElement'

  export default {
    components: {
      ShowMessage,
      MultiRootElement
    },
    data() {
      return {
        title: "标题",
        content: "内容",
        message: {
          title: "消息标题",
          content: "消息内容"
        }
      }
    }
  }
</script>

<style scoped>

</style>