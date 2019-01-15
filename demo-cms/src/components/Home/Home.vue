<template>
  <div class="swiper">
    <MySwipe url="banner/channel_main"></MySwipe>
    <div class="gridview">
      <my-ul>
        <my-li v-for="(grid, index) in grids" :key="index">
          <router-link :to="grid.router">
            <i :class="grid.className"></i>
            <span>{{ grid.title }}</span>
          </router-link>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      banners: [], // 轮播图数据
      grids: [
        {
          className: 'cms-news',
          title: '新闻资讯',
          router: {
            name: 'news.list'
          }
        },
        {
          className: 'cms-photo',
          title: '图文分享',
          router: {
            name: 'photo.list',
            params: {
              categoryId: 0
            }
          }
        },
        {
          className: 'cms-product',
          title: '商品展示',
          router: {
            name: 'goods.list',
            params: {
              id: 1
            }
          }
        },
        {
          className: 'cms-comment',
          title: '留言反馈',
          router: {
            name: 'news.list'
          }
        },
        {
          className: 'cms-qa',
          title: '搜索资讯',
          router: {
            name: 'news.list'
          }
        },
        {
          className: 'cms-contact',
          title: '联系我们',
          router: {
            name: 'news.list'
          }
        }
      ]
    }
  },
  // created 创建组件的生命周期函数中，可操作数据
  created () {

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
  .gridview {
    overflow: hidden;
    background: #333;
  }

  .gridview ul li a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #333;
  }
  .gridview i {
    display: inline-block;
    width: 2.142857rem;
    height: 2.142857rem;
    background-size: 100% 100%;
  }
  .gridview span {
    height: 2.142857rem;
    line-height: 2.142857rem;
  }
  .cms-news {
    background: url(../../assets/img/news.png) no-repeat center center;
  }
  .cms-photo {
    background: url(../../assets/img/photo.png) no-repeat center center;
  }
  .cms-product {
    background: url(../../assets/img/product.png) no-repeat center center;
  }
  .cms-comment {
    background: url(../../assets/img/comment.png) no-repeat center center;
  }
  .cms-qa {
    background: url(../../assets/img/qa.png) no-repeat center center;
  }
  .cms-contact {
    background: url(../../assets/img/contacts.png) no-repeat center center;
  }
</style>
