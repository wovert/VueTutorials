<script>
  import { h, ref } from 'vue'

  export default {
    setup() {
      const counter = ref(0)
      return {
        counter
      }
    },
    render() {
      return h("div", {class: "box"}, [
        h('h2', null, `当前计数：${this.counter}`),
        h('button', {
            onClick: () => this.counter++
        }, `+1`),
        h('button', {
            onClick: () => this.counter--
        }, `-1`),
      ])
    }
  }
</script>

<style scoped>
.title {
  font-size: 30px;
  color: red;
}
</style>