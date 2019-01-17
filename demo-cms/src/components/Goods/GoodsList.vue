<template>
  <section>
    <nav-bar title="商品列表"/>
    <!-- <ul>
      <li v-for="(c, index) in categories" :key="index">
        <a href="javascript:;" @click="loadImagesByCategoryId(c.topCaId)">{{c.name}}</a>
      </li>
    </ul> -->
    <!-- <mt-loadmore :auto-fill="false" :top-method="loadTop" :bottom-method="loadBottom" @top-status-change="handleTopChange" ref="loadmore"> -->
    <mt-loadmore :auto-fill="false" :bottom-method="loadBottom" ref="loadmore" :bottom-all-loaded="isAllLoaded">
      <ul class="data-list">
        <li v-for="(item, index) in photoList" :key="index">
          <router-link :to="{name:'goods.detail',  params: {id: item.id}}">
            <img v-lazy="item.cover" :key="item.cover" :alt="item.title">
            <span>{{ item.title | convertStr(18) }}</span>
            发布时间：<time>{{ item.addTime*1000 | convertTime('YYYY年MM月DD日')}}</time>
          </router-link>
        </li>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">Loading...</span>
        </div>
      </ul>
    </mt-loadmore>
    <!-- <article v-for="(photo, index) in photoList" :key="index">
      <router-link :to="{name:'photo.detail',  params: {id: photo.id}}">
      <p>
        {{ photo.title }}<br />
        发布时间：<time>{{ photo.showTime*1000 | convertTime('YYYY年MM月DD日')}}</time>
      </p>
      <figure>
        <img v-lazy="photo.cover" :key="photo.cover" :alt="photo.title">
      </figure>
      </router-link>
    </article> -->
  </section>
</template>

<script>
export default {
  props: [
    'apprefs'
  ],
  data () {
    return {
      photoList: [],
      categories: [],
      topStatus: '',
      page: 1,
      isAllLoaded: false
      // boxHeight: document.body.clientHeight
    }
  },
  beforeRouteUpdate (to, from, next) {
    // 路由复用，但参数改变触发，参数：query||params
    // console.log(to)
    this.loadImageById(to.params.categoryId)
    next()
  },
  created () {
    // 1. 获取路由参数categoryId
    let categoryId = this.$route.params.categoryId
    this.loadImageById(categoryId)

    // 2. 获取图文分类信息
    this.$axios.get('event/main/tuan/category').then(res => {
      if (res.data.state === 200 && res.data.result.length > 0) {
        this.categories = res.data.result
        this.categories.unshift({
          id: 0,
          title: '全部'
        })
      }
    }).catch(err => console.log('分类信息获取失败', err))
  },
  mounted () {
    // 装载数据完毕，接受apprefs.appHeader
    // 公式：设备高度 - 头 - 尾 = 中间的高度(loadmore父元素的高度)
    // let headerHeight = this.apprefs.appHeader.$el.offsetHeight
    // let footerHeight = this.apprefs.appFooter.$el.offsetHeight
    // console.log(headerHeight)
    // console.log(footerHeight)
    // console.log(document.body.clientHeight)
    // this.boxHeight = document.body.clientHeight - headerHeight - footerHeight
  },
  methods: {
    loadByPage () {

    },
    handleTopChange (status) {
      this.topStatus = status
      console.log(status)
      // pull 没有达到下拉范围
      // drop 达到下拉范围
    },
    loadTop () {
      console.log('函数调用被触发了')
      this.$refs.loadmore.onTopLoaded()
    },
    loadBottom () {
      if (!this.isAllLoaded) {
        console.log('上拉函数调用被触发了')
        let categoryId = this.$route.params.categoryId
        this.loadImageById(categoryId)
        this.$refs.loadmore.onBottomLoaded() // 通知元素重新定位
      } else {
        console.log('已加载全部')
      }
    },
    getImgUrl (img) {
      return 'http://img.static.gqsj.cc/' + img
    },
    loadImagesByCategoryId (categoryId) {
      // 1. 路由参数改变, 此函数会触发 beforeRouteUpdate
      this.$router.push({
        name: 'photo.list',
        params: {
          categoryId
        }
      })
    },
    // 通过id获取数据
    loadImageById (cat) {
      // 2. 通过url拼接参数发请求
      // 3. 获取数组渲染
      this.$axios.get(`tuan/list/${this.page}`, {params: {cat}}).then(res => {
        // 判断是否还有数据
        if (res.data.result.length === 0) {
          // loadmore禁止函数调用的属性来控制
          this.isAllLoaded = true
          this.$toast({
            message: '没有更多数据了'
          })
          return
        }
        if (res.data.state === 200 && res.data.result.length > 0) {
          this.photoList = this.photoList.concat(res.data.result)
          this.page++
        } else {
          this.$toast({
            message: '没有图片了',
            iconClass: 'iconfont icon-debug'
          })
        }
      }).catch(err => console.log('图文列表异常', err))
    }
  }
}
</script>

<style scoped>
  input["type"] {
    width: 50px;
  }
  section {
    background: #f0f0f0;
    height: 100%;
  }
  li {
    position: relative;
    overflow: hidden;
    margin: 0;
  }
  .data-list li {
    margin: 0;
    float: left;
    width: 50%;
    overflow: hidden;
  }
  .data-list > li > a {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
  }
  figure {
    margin: 0;
  }
  img {
    width: 100%;
    height: 200px;
  }
  p {
    text-align: center;
    margin: 0;
    font-size: 16px;
  }
  a {
    color: #333;
    text-decoration: none;
  }
  /*图片懒加载样式*/
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }

  ul {
    list-style: none;
    overflow: hidden;
    margin: 0;
    padding: 10px;
  }
  ul li {
    float:left;
    margin-right: .714286rem
  }
</style>
