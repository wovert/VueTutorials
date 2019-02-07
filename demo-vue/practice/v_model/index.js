import Vue from 'vue'

const component = {
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: ['value1'],
  template: `
    <div>
      <input type="text" @input="handleInput" :value="value1">
    </div>
  `,
  methods: {
    handleInput (e) {
      // this.$emit('input', e.target.value)
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  name: 'Root',
  el: '#root',
  components: {
    CompOne: component
  },
  data: {
    value: '123'
  },
  template: `<div>
    <comp-one :value="value" @input="value = arguments[0]"></comp-one>
    <comp-one v-model="value"></comp-one>
    </div>`
})