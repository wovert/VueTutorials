import _ from 'lodash-es'
import { sum } from './js/math'

import { createApp } from 'vue'
import App from './vue/App.vue'
import mul from './ts/mul'

import './css/style.css'

// pnpm i less -D
import './css/title.less'

const ele = document.createElement('h2')
ele.className = 'title'
ele.innerHTML = 'Hello Vite'
document.body.appendChild(ele)

console.log(_.join(['CBA', 'NBA'], '-'))

console.log(sum(10, 2))
console.log("hello world")

// ts
console.log(mul(30, 19))

// vue
createApp(App).mount('#app')


