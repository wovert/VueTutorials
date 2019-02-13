import Vue from 'vue'

const component = {
  props: {
    active: {
      // type: Boolean,
      // required: true,
      default: false,
      validator (value) {
        return typeof value === 'boolean'
      }
    },
    propOne: String,
    // onChange: Function
  },
  data () {
    return ({
      text: 123
    })
  },
  methods: {
    handleChange () {
      // this.onChange()
      this.$emit('change')
    }
  },
  template: `
    <div>
      component {{ text }}
      <input type="text"  v-model.number="text">
      <span @click="handleChange">{{ propOne }}</span>
      <span v-show="active">see me if active</span>
    </div>
  `
}

// 全局组件
// Vue.component('CompOne', component)

new Vue({
  el:'#root',
  components: {
    CompOne: component
  },
  data : {
    prop1: 'text1'
  },
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  },
  mounted () {
    console.log(this.$refs.comp1)
  },
  template: `<div>
    <comp-one 
      ref="comp1"
      :active="true" 
      :prop-one="prop1"
      @change="handleChange"
    ></comp-one>
    <comp-one 
      :active="false" 
      propOne="text2"
    ></comp-one>
  </div>`
})