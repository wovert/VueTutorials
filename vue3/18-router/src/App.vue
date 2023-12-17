<template>
  <div>
    <!-- props: href 跳转的链接 -->
    <!-- props: route对象 -->
    <!-- props: navigate导航函数 -->
    <!-- props: isActive 是否当前处于活跃的状态 -->
    <!-- props: isExactActive 是否当前处于精确的活跃状态 -->

    <!-- <router-link to="/home" v-slot="props" custom>
      <button @click="props.navigate">{{props.href}}</button>
      <button @click="props.navigate">哈哈哈</button>
      <span :class="{'active': props.isActive}">{{props.isActive}}</span>
      <span :class="{'active': props.isActive}">{{props.isExactActive}}</span> -->
      <!-- <p>{{props.route}}</p> -->
    <!-- </router-link> -->

    <div>
      <router-link to="/home" replace>home(replace)</router-link> | 
      <router-link to="/home" active-class="why-active">home</router-link> | 
      <router-link to="/home" active-class="why-active">home(精准匹配)</router-link> | 
      <router-link to="/about">关于</router-link> | 
      <router-link to="/user/kobe/id/111">用户</router-link> | 
      <router-link to="/category">分类</router-link>
    </div>
    <div>
      <button @click="jumpToAbout">关于</button>
      <button @click="forwardOneStep">前进一步</button>
    </div>
    <router-view v-slot="props">
      <transition name="why">
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </transition>
    </router-view>
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

<style>

  .why-active {
    color: red;
  }
  .router-link-exact-active, .link-exact-active {
    font-size: 20px;
    color: #fff;
    display: inline-block;
    background: green;

  }

  .why-enter-from,
  .why-leave-to {
    opacity: 0;
  }

  .why-enter-active,
  .why-leave-active {
    transition: opacity 1s ease;
  }
</style>
