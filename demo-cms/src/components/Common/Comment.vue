<template>
  <div>
    <fieldset>
      <header>
        <h1>提交评论</h1>
        <p><a href="#">返回</a></p>
      </header>
      <form>
        <textarea v-model="msg"></textarea>
        <mt-button size="large" type="primary" @click="sendMsg">发表评论</mt-button>
      </form>
    </fieldset>
    <section>
      <header>
        <h1>评论列表</h1>
        <p><span class="comment-count">{{comments.length}}</span>条评论</p>
      </header>
      <article v-for="(comment, index) in comments" :key="index">
        <dl>
          <dt>{{ comment.nickname}}</dt>
          <dd>
              <span>{{ comment.msg }}</span>
              <time>{{ comment.addTime*1000 | relativeTime('YYYY年MM月DD日') }}</time>
          </dd>
        </dl>
      </article>
      <mt-button @click="loadMore" size="large" type="danger" plain>加载更多评论</mt-button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'comment',
  data () {
    return {
      comments: [],
      page: 1,
      msg: ''
    }
  },
  props: [
    'cid'
  ],
  created () {
    // 这个组件是否有页码，没有则使用第一页
    this.page = this.$route.query.page || '1' // 前段路由参数
    this.loadMore()
  },
  methods: {
    loadMore () {
      this.cid = 154
      this.$axios.get(`bang/comment/${this.cid}/${this.page}`).then(res => {
        if (res.data.result.length === 0) {
          this.$toast('没有数据')
        } else if (res.data.state === 200 && res.data.result.length > 0) {
          this.comments = this.page === 1 ? res.data.result : this.comments.concat(res.data.result)
          this.page++
        }
      }).catch(err => {
        console.log('评论获取失败', err)
      })
    },
    // 发表评论
    sendMsg () {
      // 发表之前判断是否为空
      if (this.msg.trim() === '') {
        return this.$toast('评论信息不能为空！')
      }
      this.$axios.post(`postcomment/${this.cid}`, `content=${this.msg}`).then(res => {
        // 发表之后，清空评论
        this.msg = ''
        // 加载第页的数据
        this.page = 1
        this.loadMore()
      }).catch(err => console.log('发表评论失败', err))
    }
  }
}
</script>

<style scoped>
  div {
    background: #fff;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  textarea {
    width: 100%;
  }
  p {
    margin: 0;
  }
  fieldset,section {
    border: 0;
    padding: 1.071429rem;
    margin: 0;
  }
  fieldset {
    padding-bottom: 0;
  }
  section {
    padding-top: 0;
  }
  h1 {
    font-size: 1.2em;
    margin: .357143rem 0;
  }
  dl {
    display: flex;
    margin: .357143rem;
  }
  dt {
    width: 4em;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  dd {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }
  dd {
    margin-left: .714286rem;
  }
  dd time {
    width: 100px;
  }
</style>
