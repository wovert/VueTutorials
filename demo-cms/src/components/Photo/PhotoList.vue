<template>
  <section>
    <nav-bar title="图文列表"/>
    <ul>
      <li v-for="(c, index) in categories" :key="index">
        <a href="javascript:;" @click="loadImagesByCategoryId(c.position)">{{c.title}}</a>
      </li>
    </ul>
    <article v-for="(photo, index) in photoList" :key="index">
      <router-link :to="{name:'photo.detail', query: {id: photo.id}}">
      <p>
        {{ photo.title }}<br />
        发布时间：<time>{{ photo.showTime*1000 | convertTime('YYYY年MM月DD日')}}</time>
      </p>
      <figure>
        <img v-lazy="getImgUrl(photo.pic)" :key="photo.pic" :alt="photo.title">
      </figure>
      </router-link>
    </article>
  </section>
</template>

<script>
export default {
  data () {
    return {
      photoList: [],
      categories: []
    }
  },
  beforeRouteUpdate (to, from, next) {
    // 路由复用，但参数改变触发，参数：query||params
    console.log(to)
    this.loadImageById(to.params.categoryId)
    next()
  },
  created () {
    // 1. 获取路由参数categoryId
    let categoryId = this.$route.params.categoryId
    this.loadImageById(categoryId)

    // 2. 获取图文分类信息
    this.$axios.get('getphotocategory.php').then(res => {
      if (res.data.state === 200 && res.data.message.length > 0) {
        this.categories = res.data.message
        this.categories.unshift({
          id: 0,
          title: '全部'
        })
      }
    }).catch(err => console.log('分类信息获取失败', err))
  },
  methods: {
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
    loadImageById (categoryId) {
      // 2. 通过url拼接参数发请求
      // 3. 获取数组渲染
      this.$axios.get('getphotolist.php', {params: {categoryId}}).then(res => {
        if (res.data.state === 200 && res.data.message.length > 0) {
          this.photoList = res.data.message
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
  section {
    background: #f0f0f0;
  }
  article {
    background: #fefefe;
    padding: .714286rem;
    margin-bottom: .357143rem;
    position: relative;
    overflow: hidden;
    height: 100px;
  }
  figure {
    margin: 0;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  p {
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4em;
    line-height: 2em;
    background-color: rgba(0,0,0,0.4);
    text-align: center;
    margin: 0;
    font-size: 16px;
    color: #fff;
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
