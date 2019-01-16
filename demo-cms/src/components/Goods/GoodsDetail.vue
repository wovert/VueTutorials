<template>
  <section>
    <nav-bar title="商品详情页"/>
    <article>
      <my-swipe class="swiper" url="banner/channel_main"></my-swipe>
      <h1>{{ goods.title }}</h1>
      <p class="data-box">
        上架时间：<time>{{ goods.endTime*1000 | convertTime('YYYY年MM月DD日') }}</time><br />
        价格：{{ goods.origPrice }}元<br />
        库存：{{ goods.stockRemain }}<br />
        <span>购买数量：<button @click="substract">-</button><input type="number" v-model="pickNum" class="cnt" /><button @click="add">+</button></span><br />
        <mt-button type="primary">立即购买</mt-button>
        <mt-button type="danger" @click="insertBall">加入购物车</mt-button>
        <transition name="ball" @after-enter="afterEnter">
          <span class="ball" v-if="isExists"></span>
        </transition>
      </p>
      <p>
        <mt-button @click="showPhotoInfo" type="primary" size="large" plain>图文介绍</mt-button>
        <mt-button @click="goodsComment" type="danger" size="large" plain>商品评论</mt-button>
      </p>
      <p class="content-image">
        <img :src="goods.cover" :key="goods.cover" :alt="goods.title" />
      </p>
      <!-- <div class="goods-content">
        <p v-for="(img, index) in goods.images" :key="index">
          <img v-lazy="img" :key="img" :alt="goods.title">
        </p>
      </div> -->
      <vue-preview :slides="photoList"></vue-preview>
    </article>
    <!-- comments -->
    <comment :cid="$route.params.id" />
  </section>
</template>

<script>
import EventBus from '@/EventBus'

let defaultImg = '../../assets/img/default.jpg'
export default {
  data () {
    return {
      pickNum: 1,
      goods: '',
      photoList: [],
      isExists: false // 小球隐藏
    }
  },
  created () {
    let id = this.$route.params.id
    this.$axios.get(`tuan/${id}`).then(res => {
      if (res.data.state === 200) {
        this.goods = res.data.result
        for (let i in res.data.result.images) {
          this.photoList.push({
            src: res.data.result.images[i],
            msrc: res.data.result.images[i],
            w: 600,
            h: 400
          })
        }
      }
    }).catch(err => console.log('没有图文详情', err))
  },
  methods: {
    substract () {
      this.pickNum = this.pickNum <= 1 ? 1 : --this.pickNum
    },
    add () {
      if (this.goods.stockRemain <= this.pickNum) return
      this.pickNum++
    },
    getImgUrl (img) {
      return img === defaultImg ? img : 'http://img.static.gqsj.cc/' + img
    },
    insertBall () {
      this.isExists = true
    },
    afterEnter () {
      this.isExists = false // 移除元素
      // 通知APP组件增加小球数量
      EventBus.$emit('addCart', this.pickNum)
    },
    showPhotoInfo () {
      // 编程导航（去哪里）
      this.$router.push({
        name: 'photo.info',
        query: {
          id: this.$route.params.id
        }
      })
    },
    goodsComment () {
      this.$router.push({
        name: 'goods.comment',
        query: {
          id: this.$route.params.id
        }
      })
    }
  },
  watch: {
    // key是data属性名
    pickNum (newV, oldV) {
      this.pickNum = newV < 1 ? 1 : newV
    }
  }
}
</script>

<style scoped>
  section {
    background: #f0f0f0;
    overflow: hidden;
  }
  .cnt {
    width: 50px;
    text-align: center;
  }
  article {
    background: #fefefe;
    padding: .714286rem;
    margin-bottom: .357143rem;
    overflow: hidden;
  }
  .data-box {
    position: relative;
  }
  .content-image img {
    width: 60%;
    border: 5px solid red;
  }
  .photo-content img {
    width: 100%
  }
  .ball {
    position: absolute;
    bottom: 30px;
    right: 65%;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background:green;
    display: block;
  }
  .ball-enter-active {
    animation: bounce-in 1s
  }
  .ball-leave {
    /*元素进入以后，透明度0，整个动画都是0*/
    /*元素离开默认是1,所以会闪一下，设置为0不会闪*/
    opacity: 0
  }
  @keyframes bounce-in {
    0% {
      transform: translate3d(0, 0, 0)
    }
    50% {
      transform: translate3d(150px, -50px, 0)
    }
    75% {
      transform: translate3d(160px, 0px, 0)
    }
    100% {
      transform: translate3d(140px, 300px, 0)
    }
  }
</style>
