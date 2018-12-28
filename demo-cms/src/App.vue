<template>
  <div>
    <mt-header fixed title="信息管理系统"></mt-header>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="" alt="外卖">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="" alt="订单">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="" alt="发现">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="" alt="我的">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style></style>
