<template>
  <div class="container">
    <mt-header title="信息管理系统" fixed></mt-header>
    <router-view/>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/img/home.png" alt="首页">
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="./assets/img/user.png" alt="订单">
        会员
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img slot="icon" src="./assets/img/cart.png" alt="购物车">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/img/search.png" alt="search">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: ''
    }
  },
  watch: {
    selected (newV, oldV) {
      console.log(oldV, newV)
      this.$router.push({
        name: newV
      })
    }
  }
}
</script>
<style scoped>
  .container {
    padding: 40px 0 55px 0;
  }
</style>
