<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(banner, index) in banners" :key="index">
      <img :src="banner.pic" :alt="banner.title" />
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  name: 'my-swipe',
  props: ['url'],
  data () {
    return {
      banners: []
    }
  },
  created () {
    this.$axios.get(this.url).then(res => {
      this.banners = res.data.result.length > 0 ? res.data.result : []
    }).catch(err => console.log('轮播图获取异常', err))
  }
}
</script>

<style scoped>
  .swiper {
    height: 100px;
    background: #fff;
  }
  .swiper img {
    width: 100%;
  }
</style>
