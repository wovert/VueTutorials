import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>{{ name }}</p>
      <p>{{ getName() }}</p>
      <p>Number: {{ num }}</p>
      <p>fullName: {{ fullName }}</p>
      <p><input type="text" v-model="num"></p>
      <p>FirstName:<input type="text" v-model="firstName"></p>
      <p>lastName:<input type="text" v-model="lastName"></p>
      <p>name:<input type="text" v-model="name"></p>
      <p>obj.a:<input type="text" v-model="obj.a"></p>

    </div>
  `,
  watch: {
    // firstName (newName, oldName) {
    //   this.fullName = newName + ' ' + this.lastName
    // }
    firstName: {
      handler (newName, oldName) {
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true, // 绑定立刻执行
    },
    // obj: {
    //   handler () {
    //     console.log('obj.a changed')
    //   },
    //   immediate: true, // 绑定立刻执行
    //   deep: true // 遍历obj对象所有属性
    // },
    'obj.a': {
      handler () {
        console.log('obj.a changed')
      },
      immediate: true, // 绑定立刻执行
    },
  },
  data: {
    firstName: 'Jocky',
    lastName: 'Black',
    fullName: '',
    num: 0,
    obj: {
      a: '123'
    }
  },
  computed: {
    // name () {
    //   console.log('new name')
    //   return `${this.firstName} ${this.lastName}`
    // },
    name: {
      get () {
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const n = name.split(' ')
        this.firstName = n[0]
        this.lastName = n[1]
      }
    }
  },
  methods: {
    getName () {
      console.log('getname')
      return `${this.firstName} ${this.lastName}`
    }
  }
})