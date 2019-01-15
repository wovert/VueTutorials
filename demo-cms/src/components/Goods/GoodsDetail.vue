<template>
  <section>
    <nav-bar title="商品详情页"/>
    <article>
      <h1>{{ photo.title }}</h1>
      <p>
        发布时间：<time>{{ photo.endTime*1000 | relativeTime('YYYY年MM月DD日') }}</time>
      </p>
      <p class="content-image">
        <img :src="photo.cover" :key="photo.cover" :alt="photo.title" />
      </p>
      <!-- <div class="photo-content">
        <p v-for="(img, index) in photo.images" :key="index">
          <img v-lazy="img" :key="img" :alt="photo.title">
        </p>
      </div> -->
      <vue-preview :slides="photoList"></vue-preview>
    </article>
    <!-- comments -->
    <comment :cid="$route.params.id" />
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
    let id = this.$route.params.id
    this.$axios.get(`tuan/${id}`).then(res => {
      if (res.data.state === 200) {
        this.photo = res.data.result
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
    getImgUrl (img) {
      return img === defaultImg ? img : 'http://img.static.gqsj.cc/' + img
    }
  }
}
</script>

<style scoped>
  section {
    background: #f0f0f0;
    overflow: hidden;
  }
  article {
    background: #fefefe;
    padding: .714286rem;
    margin-bottom: .357143rem;
    overflow: hidden;
  }
  .content-image img {
    width: 60%;
    border: 5px solid red;
  }
  .photo-content img {
    width: 100%
  }
</style>
