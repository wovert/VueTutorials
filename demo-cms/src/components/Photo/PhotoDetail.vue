<template>
  <section>
    <nav-bar title="图文详情页"/>
    <article>
      <h1>{{ photo.title }}</h1>
      <p>
        发布时间：<time>{{ photo.showTime*1000 | convertTime('YYYY年MM月DD日') }}</time>
      </p>
      <p class="content-image">
        <img :src="getImgUrl(photo.pic)" :key="photo.pic" :alt="photo.title" />
      </p>
      <div class="photo-content">
        <!-- <p v-for="(photo, index) in photoList" :key="index">
          <img v-lazy="getImgUrl(photo.pic)" :key="photo.pic" :alt="photo.title">
        </p> -->
      </div>
      <vue-preview :slides="photoList"></vue-preview>
    </article>
  </section>
</template>

<script>
let defaultImg = '../../assets/img/default.jpg'
export default {
  data () {
    return {
      photo: {
        pic: defaultImg
      },
      photoList: []
    }
  },
  created () {
    let id = this.$route.query.id
    this.$axios.get('getphoto.php', {params: {id}}).then(res => {
      if (res.data.state === 200) {
        this.photo = res.data.message
      }
    }).catch(err => console.log('没有图文详情', err))

    this.$axios.get('getphotolist.php', {params: {categoryId: 0}}).then(res => {
      if (res.data.state === 200 && res.data.message.length > 0) {
        this.photoList = res.data.message
        this.photoList.forEach(pic => {
          pic.src = this.getImgUrl(pic.pic)
          pic.msrc = this.getImgUrl(pic.pic + '@300w_300h_1e_1c_99q_1o')
          pic.w = 600
          pic.h = 400
        })
      } else {
        this.$toast({
          message: '没有图片了',
          iconClass: 'iconfont icon-debug'
        })
      }
    }).catch(err => console.log('图文列表异常', err))
  },
  methods: {
    getImgUrl (img) {
      return img === defaultImg ? img : 'http://img.static.gqsj.cc/' + img
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
  }
  .content-image img {
    width: 60%;
    border: 5px solid red;
  }
  .photo-content img {
    width: 100%
  }
</style>
