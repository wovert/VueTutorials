<script>
  import { h } from 'vue'

  export default {
    render() {
      return (
        <div>
          <h3>Hello world组件</h3>
          { this.$slots.default ? this.$slots.default() : <span>子组件默认插槽</span> }
        </div>
      )
    }
  }
</script>