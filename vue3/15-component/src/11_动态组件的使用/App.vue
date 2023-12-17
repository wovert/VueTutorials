<template>
  <div>
    <button v-for="item in tabs" :key="item"
            @click="itemClick(item)"
            :class="{active: currentTab === item}">
      {{item}}
    </button>

    <!-- 2.动态组件 -->
    <!-- keep-alive 保持组件内部数据状态 -->
    <!-- :include="/a|b/" -->
    <!-- :include="['a','b']/" -->
    <keep-alive include="home,about">
      <component :is="currentTab"
                 name="coderwhy"
                 :age="18"
                 @pageClick="pageClick">
      </component>
    </keep-alive>
    

    <!-- 1.v-if的判断实现 -->
    <!-- <template v-if="currentTab === 'home'">
      <home></home>
    </template>
    <template v-else-if="currentTab === 'about'">
      <about></about>
    </template>
    <template v-else>
      <category></category>
    </template> -->
  </div>
</template>

<script>
  import Home from './pages/Home'
  import About from './pages/About'
  import Category from './pages/Category'

  export default {
    components: {
      Home,
      About,
      Category
    },
    data() {
      return {
        tabs: ["home", "about", "category"],
        currentTab: "home"
      }
    },
    methods: {
      itemClick(item) {
        this.currentTab = item
      },
      pageClick() {
        console.log("page内部发生了点击")
      }
    }
  }
</script>

<style scoped>
  .active {
    color: red;
  }
</style>