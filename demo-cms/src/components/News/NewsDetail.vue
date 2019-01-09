<template>
  <section>
    <nav-bar title="新闻详情页"/>
    <article>
      <h1>{{ news.title }}</h1>
      <p>
        发布时间：<time>{{ news.addTime*1000 | convertTime('YYYY年MM月DD日') }}</time>
      </p>
      <div v-html="news.content"></div>
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
    this.$axios.get('getnews.php', {params: {id}}).then(res => {
      if (res.data.state === 200) {
        this.news = res.data.message
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
</style>
