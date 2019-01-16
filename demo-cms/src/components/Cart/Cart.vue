<template>
  <div>
    <nav-bar title="购物车"/>
    <div class="pay-detail">
      <ul>
          <li class="p-list" v-for="(item, index) in cartsList" :key="index">
            <mt-switch v-model="item.isSelected"></mt-switch>
            <img :src="item.cover" />
            <div class="pay-calc">
              <p>商品标题</p>
              <div class="pic">
                <span>￥{{ item.price }}</span>
                <button @click="substract(item)">-</button>
                <span>{{ item.num }}</span>
                <button @click="add(item)">+</button>
              </div>
            </div>
            <button class="del-btn" @click="del(index)">删除</button>
          </li>
      </ul>
    </div>
    <div class="show-price">
      <div class="show-1">
        <p>总计（不含运费）：</p>
        <span>已经选择商品{{ payment.totalCount }}件，总价￥{{ payment.totalPrice }}元</span>
      </div>
      <div class="show-2">
        <mt-button type="danger" size="large">去结算</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsModel from '@/model/GoodsModel'

export default {
  computed: {
    payment () {
      let totalPrice = 0
      let totalCount = 0
      this.cartsList.forEach(goods => {
        totalCount += goods.num
        totalPrice += goods.num * goods.price
      })
      return {
        totalPrice,
        totalCount
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    if (confirm('亲，真的要离开吗？')) {
      // 保存当前的剩余购物数据
      let obj = {}
      this.cartsList.forEach(goods => {
        obj[goods.myid] = goods.num
      })
      GoodsModel.saveGoods(obj)
      next()
    } else {
      next(false) // 取消导航行为
    }
  },
  data () {
    return {
      cartsList: []
    }
  },
  methods: {
    add (goods) {
      goods.num++
    },
    substract (goods) {
      goods.num--
    },
    del (index) {
      this.cartsList.splice(index, 1)
    }
  },
  created () {
    let goodsList = GoodsModel.getGoodsList()
    // let ids = Object.keys(goodsList).join(',')
    this.$axios.get('http://m.spa.com:3004/getcartlist').then(res => {
      // // 给this.cartsList添加属性
      // res.data.forEach(goods => {
      //   // 判断是否有该商品
      //   if (goodsList[goods.myid]) {
      //     goods.num = goodsList[goods.myid]
      //   }
      //   // 不管有没有都需要打钩
      //   goods.isSelected = true
      // })
      // this.cartsList = res.data

      // 数据不完整的时候添加属性，就需要手动通知vuew完成响应式（双向数据绑定）
      this.cartsList = res.data
      this.cartsList.forEach(goods => {
        if (goodsList[goods.myid]) {
          this.$set(goods, 'num', goodsList[goods.myid])
        }
        // 不管有没有都需要打钩
        this.$set(goods, 'isSelected', true)
      })
    }).catch(err => console.log('购物车数据异常', err))
  }
}
</script>

<style>
  ul {
    margin: 0;
    padding: 10px;
  }
  li {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  li img {
    width: 50px;
    height: 50px;
    margin: 0 10px 0 10px;
  }
  .del-btn {
    width: 80px;
  }
</style>
