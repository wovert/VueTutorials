<script>
  import { h } from 'vue'

  export default {
    render() {
    //   return h("h2", {class: "box"}, 'Hello World')
        return h('div', null, [
            h('h2', null, 'Hello World'),
            this.$slots.default ? this.$slots.default({name:'Alice'}) : h('span', null, '我是HelloWorld默认插槽默认值')
        ])
    }
  }
</script>