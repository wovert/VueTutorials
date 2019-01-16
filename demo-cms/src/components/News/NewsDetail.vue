<template>
  <section>
    <nav-bar :title="title"/>
    <article>
      <h1>{{ news.title }}</h1>
      <p>
        发布时间：<time>{{ news.addTime*1000 | convertTime('YYYY年MM月DD日') }}</time>
      </p>
      <div class="news-content" v-html="news.html"></div>
    </article>
  </section>
</template>

<script>
export default {
  data () {
    return {
      news: {},
      title: ''
    }
  },
  created () {
    let id = this.$route.query.id
    this.$axios.get(`channel/news/${id}`).then(res => {
      if (res.data.state === 200) {
        this.news = res.data.result
      }
    }).catch(err => console.log('没有新闻详情', err))
  },
  // 路由确认前，组件渲染前的守卫函数
  beforeRouteEnter (to, from, next) {
    let title = ''
    if (from.name === null) {
      if (to.name === 'news.detail') {
        title = '新闻详情'
      } else if (to.name === 'photo.info') {
        title = '商品图文介绍'
      }
    } else if (from.name === 'news.list') {
      title = '新闻详情'
    } else if (from.name === 'goods.detail') {
      title = '商品图文介绍'
    }
    // 最终都放行，大不了赋值一个title为空串
    next(vm => {
      // 通过 vm 访问组件实例
      vm.title = title
    })
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
  }
  figure img {
    width: 100%
  }
  /*
    先找到.new-content img的图像进行渲染，但是还没有渲染 v-html="news-content"
    v-html="newsDetail.content" 是nextTick以后才会有
    解决方案：全局样式文件中
  */
  .news-content img {
    width: 100%
  }
</style>
