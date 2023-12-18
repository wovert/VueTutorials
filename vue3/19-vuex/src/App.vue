<template>
  <com01 />
  <hr />
  <com02 />
  <hr />
  <com03 />
  <hr />
  <com04 />
  <hr />
  <com05 />
  <hr />
  <com06 />
  <hr />
  <com07 />
  <hr />
  <com08 />
  <hr />
  <com09 />
  <hr />
  <com10 />
  <hr />
  <com11 />
  <hr />
  <com12 />
  <hr />
  <com13 />
  <hr />
  <com14 />
  <hr />
  <com15 />
  <hr />
  <com16 />
  <hr />
  <com17 />
  <hr />
  <h2>APP组件</h2>
  <h2>App:{{ $store.state.rootCounter }}</h2>
  <button @click="increment">+1</button>
  <button @click="doubleIncrement">*2</button>
  <button @click="decrement">-1</button>
  <button @click="changeName">changeName</button>
  <button @click="changeHeight">changeHeight</button>
</template>

<script>
import Com01 from './pages/01_mapState_compunted'
import Com02 from './pages/02_mapState_setup'
import Com03 from './pages/03_useState封装后使用'
import Com04 from './pages/04_mapGetters_computed'
import Com05 from './pages/05_useGetters封装后使用'
import Com06 from './pages/06_mutation的细节补充'
import Com07 from './pages/07_mutations的辅助函数'
import Com08 from './pages/08_actions的使用和细节补充'
import Com09 from './pages/09_actions的辅助函数'
import Com10 from './pages/10_actions的返回Promise'
import Com11 from './pages/11_module的基本使用'
import Com12 from './pages/12_module的命名空间'
import Com13 from './pages/13-mapX写法1.vue'
import Com14 from './pages/14-mapX写法2.vue'
import Com15 from './pages/15-mapX写法3.vue'
import Com16 from './pages/16-mapX写法4.vue'
import Com17 from './pages/17-nexttick.vue'

export default {
  name: "App",
  components: {
    Com01,
    Com02,
    Com03,
    Com04,
    Com05,
    Com06,
    Com07,
    Com08,
    Com09,
    Com10,
    Com11,
    Com12,
    Com13,
    Com14,
    Com15,
    Com16,
    Com17,
  },
  methods: {
    increment() {
      this.$store.commit("increment")
    },
    doubleIncrement() {
      this.$store.commit("doubleIncrement")
    },
    decrement() {
      this.$store.commit("decrement")
    },
    changeName() {
      this.$store.commit("changeName")
    },
    changeHeight() {
      this.$store.commit("changeHeight")
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
