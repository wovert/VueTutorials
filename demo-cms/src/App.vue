<template>
  <div class="container">
    <mt-header title="信息管理系统" fixed ref="appHeader"></mt-header>
    <main>
      <div></div>
      <transition name="rv" mode="out-in">
        <router-view :apprefs="$refs" />
      </transition>
    </main>
    <mt-tabbar v-model="selected" fixed ref="appFooter">
      <mt-tab-item id="home">
        <img slot="icon" @click="changeHash" src="./assets/img/home.png" alt="首页">
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" @click="changeHash" src="./assets/img/user.png" alt="订单">
        会员
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img slot="icon" @click="changeHash" src="./assets/img/cart.png" alt="购物车">
        购物车<mt-badge type="error" size="small">{{ num }}</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" @click="changeHash" src="./assets/img/search.png" alt="search">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import EventBus from '@/EventBus'
import GoodsModel from '@/model/GoodsModel'

export default {
  data () {
    return {
      selected: '',
      num: 0
    }
  },
  created () {
    let now = Date.now()
    while (Date.now() - now < 2000) {
      // 等待两秒以后渲染
    }

    // 初始化小球的数量
    this.num = GoodsModel.getTotalCount()

    EventBus.$on('addCart', data => {
      // console.log(data)
      // console.log(this)
      console.log(data)
      this.num += data
    })
  },
  methods: {
    changeHash () {
      // 在vue完成渲染任务以后的行为
      this.$nextTick(function () {
        // 该调用早于了子组件赋值给父组件的selected
        this.$router.push({
          name: this.selected
        })
      })
    }
  }
  // watch: {
  //   selected (newV, oldV) {
  //     console.log(oldV, newV)
  //     this.$router.push({
  //       name: newV
  //     })
  //   }
  // }
}
</script>
<style scoped>
  .mint-header,.mint-tabbar{
    z-index: 10;
  }
  .rv-enter-active, .rv-leave-active {
    transition: opacity .5s
  }
  .rv-enter, .rv-leave-to {
    opacity: 0
  }
</style>
