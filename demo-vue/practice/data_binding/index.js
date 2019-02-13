import Vue from 'vue'

let globalVar = '111'
new Vue({
  el: '#root',
  template: `
    <div 
      v-bind:id="id" 
      :class="name" 
      v-on:click="handleClick"
      :style="styles"  
    >
      <div 
        :class="{ active: isActive}"
        :style="[styles, styles2]"
      >显示内容</div>
      <div :class="[isActive ? 'active': '']">{{Date.now()}}</div>
      <p :class="[{active: isActive}]" v-html="html" @click.stop.prevent="clickContent"></p>
      <p>{{ getJoinedArr(arr) }}</p>
    </div>
  `,
  data: {
    isActive: true,
    arr: [1, 2, 3],
    html: '<span>12</span>',
    id: 'main',
    name: 'main-wrapper',
    styles: {
      color: 'red',
      appearance: 'none' // 消除浏览器默认样式
    },
    styles2: {
      background: 'yellow',
      color: '#000',
      fontSize: '30px'
    }
  },
  methods : {
    getJoinedArr (arr) {
      return arr.join(' ')
    },
    handleClick () {
      alert('click')
    },
    clickContent () {
      alert('click content')
    }
  }
})