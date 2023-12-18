<template>
  <div class="wrapper">
    <!-- props: href 跳转的链接 -->
    <!-- props: route对象 -->
    <!-- props: navigate导航函数 -->
    <!-- props: isActive 是否当前处于活跃的状态 -->
    <!-- props: isExactActive 是否当前处于精确的活跃状态 -->
    <!-- custom: 取消a元素 -->
    <router-link to="/home" v-slot="props" custom>
      <button @click="props.navigate">跳转{{props.href}}</button> | 
      <button @click="props.navigate">跳转主页</button> | 
      <span :class="{'active': props.isActive}">当前活跃状态：{{props.isActive}}</span> | 
      <span :class="{'active': props.isActive}">当前精确活跃状态：{{props.isExactActive}}</span> 
      <p>{{props.route}}</p>
    </router-link>

    <div>
      <h2>导航条</h2>
      <router-link to="/home" replace>主页(replace)</router-link> | 
      <router-link to="/home" active-class="why-active">主页</router-link> | 
      <router-link to="/home" active-class="why-active">主页(精准匹配)</router-link> | 
      <router-link to="/about">关于</router-link> | 
      <router-link to="/user/kobe/id/111">用户</router-link> | 
      <router-link to="/category">分类</router-link>
    </div>
    <div>
      <button @click="jumpToAbout">关于</button>
      <button @click="forwardOneStep">前进一步</button>
    </div>
    <!-- 动画去，设置flex布局 -->
    <div class="animation">
      <router-view v-slot="props">
        <p>{{ props.route.meta }}</p>
        <!-- props.Componet 是对应的组件 -->
        <transition name="transitionName" mode="out-in">
        <!-- <transition :name="transitionName"> -->
          <keep-alive>
            <component :is="props.Component" :class="props.route.meta.index"></component>
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>

import { useRouter } from 'vue-router'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  methods: {
    // jumpToAbout() {
    //   // router
    //   this.$router.push("/about")
    // }
  },
  setup() {
    const router = useRouter()

    const jumpToAbout = () => {
      // router.push("/about")
      router.push({
        path: "/about",
        query: {
          name: "why",
          age: 18
        }
      })
      // router.replace("/about")
    }

    const forwardOneStep = () => {
      router.go(1)
      // router.go(-1)
      // router.forward()
      // router.back()
    }

    return {
      jumpToAbout,
      forwardOneStep
    }
  }
}
</script>

<style lang="scss">

  .why-active {
    color: red;
  }
  .router-link-exact-active, .link-exact-active {
    font-size: 20px;
    color: #fff;
    display: inline-block;
    background: green;

  }

  .transitionName-enter-from,
  .transitionName-leave-to {
    opacity: 0;
  }

  .transitionName-enter-active,
  .transitionName-leave-active {
    transition: opacity 1s ease;
  }
// .animation > div {
//   width: 50%
// }
// .wrapper {
//   overflow-x: hidden;
// }
// .animation {
//   display: flex;
//   width: 200%;

//   .slide-left-enter-active,
//   .slide-left-leave-active,
//   .slide-right-enter-active,
//   .slide-right-leave-active {
//     transition: transform 0 0.3s;
//   }
//   .slide-right-enter-from {
//     transform: translateX(0)
//   }
//   .slide-right-enter-to {
//     transform: translateX(-100%)
//   }
//   .slide-right-leave-from {
//     transform: translateX(0)
//   }
//   .slide-right-leave-to {
//     transform: translateX(-100%)
//   }
//   .slide-left-enter-from {
//     transform: translateX(-200%)
//   }
//   .slide-left-enter-to {
//     transform: translateX(-100%)
//   }
//   .slide-left-leave-from {
//     transform: translateX(0)
//   }
//   .slide-left-leave-to {
//     transform: translateX(100%)
//   }
// }
</style>
