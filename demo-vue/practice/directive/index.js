import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>text: {{ text }}</p>
      <p v-once>text: {{ text }}</p>
      <p v-pre>text: {{ text }}</p>  
      <!--默认html加载是的css样式-->
      <p v-cloak>text: {{ text }}</p>
      <p v-show="active" v-text="text"></p>
      <p v-if="active" v-html="html"></p>
      <p v-else-if="text === 0">text===0</p>
      <p v-else="active">没有active</p>
      <input type="text" v-model.number="text"><br>
      <input type="text" v-model.trim="text"><br>
      
      <!--lazy=onchange-->
      <input type="text" v-model.lazy="text"><br>

      <input type="checkbox" v-model="active"><br>
      <div>
        <input type="checkbox" :value="1" v-model="arr">
        <input type="checkbox" :value="2" v-model="arr">
        <input type="checkbox" :value="3" v-model="arr">
      </div>
      <div>
        <input type="radio" value="one" v-model="picked">
        <input type="radio" value="two" v-model="picked">
        <input type="radio" value="three" v-model="picked">
      </div>
      <ul>
        <li v-for="(item, index) in arr" :key="item">
          {{ index }} = {{ item }}
        </li>
      </ul>
      <ul>
        <li v-for="(val, key, index) in obj" :key="key">
          {{ key }} = {{ val }}, {{ index }}
        </li>
      </ul>
    </div>
  `,
  data: {
    text: 0,
    active: false,
    arr: [1, 2, 3],
    picked: '',
    obj: {
      a: '123',
      b: '345',
      c: '949'
    },
    html: '<strong>this is html</strong>'
  },
})