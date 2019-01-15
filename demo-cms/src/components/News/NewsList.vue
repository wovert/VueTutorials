<template>
  <section>
    <nav-bar title="新闻列表"/>
    <article v-for="(news, index) in newsList" :key="index">
      <router-link :to="{name:'news.detail', query: {id: news.id}}">
      <p>
        {{ news.title }}<br />
        发布时间：<time>{{ news.addTime*1000 | convertTime('YYYY-MM-DD')}}</time>
      </p>
      </router-link>
    </article>
  </section>
</template>

<script>
export default {
  data () {
    return {
      newsList: []
    }
  },
  created () {
    this.$axios.get(`channel/news?page=1`).then(res => {
      if (res.data.state === 200 && res.data.result.length > 0) {
        this.newsList = res.data.result
      }
    }).catch(err => console.log('新闻列表异常', err))
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
