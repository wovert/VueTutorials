<template>
  <section>
    <nav-bar title="新闻详情页"/>
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
      news: {}
    }
  },
  created () {
    let id = this.$route.query.id
    this.$axios.get(`channel/news/${id}`).then(res => {
      if (res.data.state === 200) {
        this.news = res.data.result
      }
    }).catch(err => console.log('没有新闻详情', err))
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
