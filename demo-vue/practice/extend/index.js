import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: String
    // propOne: {
    //   type: String,
    //   required: true
    // }
  },
  data () {
    return ({
      text: 123
    })
  },
  mounted () {
    // console.log('component mounted')
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

// const CompVue = Vue.extend(component)

// new CompVue({
//   el: '#root',
//   // props: {
//   //   propOne: 'xxx'
//   // }
//   propsData: {
//     propOne: 'xxx'
//   },

//   data: {
//     text: 'hello world'
//   },
//   mounted () {
//     console.log('instance mounted')
//   },  
// })

const parent = new Vue({
  name: 'parent'
})

const component2 = {
  extends: component,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    console.log(this.$parent.$options.name) // Root
    this.$parent.text = '12345'
    // console.log('component2 mounted')
  }
}

new Vue({
  parent: parent,
  name: 'Root',
  el: '#root',
  components: {
    Comp: component2
  },
  data: {
    text: 23333333
  },
  template: `<div>
    <comp></comp>
    <span>{{ text }}</span>
  </div>`,
  mounted () {
    console.log(this.$parent.$options.name) // parent
  }  
})