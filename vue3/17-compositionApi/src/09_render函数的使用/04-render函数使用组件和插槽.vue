<!-- <template>
  <hello-world>
    <template #default>
      <h2></h2>
    </template>
  </hello-world>
</template> -->
<script>
  import { h, ref } from 'vue'
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    render() {
      return h(HelloWorld, null, {
        default: props => h('span', null, `app传入到helloworld组件内容中: ${props.name}`)
      })
    }
  }
</script>

<style scoped>
.title {
  font-size: 30px;
  color: red;
}
</style>