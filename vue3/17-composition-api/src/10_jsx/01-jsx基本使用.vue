<script>
  import { h } from 'vue'
  import HelloWorld from './components/HelloWorld'
  
  export default {
    data() {
      return {
        counter: 0
      }
    },
    render() {
      const increment = () => this.counter++
      const decrement = () => this.counter--
      return (
        <div>
          <h2>当前计数：{ this.counter }</h2>
          <button onClick={increment}>+1</button>
          <button onClick={decrement}>-1</button>
          <HelloWorld>
            {{ default: props => <button>我是app按钮</button>}}
          </HelloWorld>
          <HelloWorld>
          </HelloWorld>
        </div>
      )
    }
  }
</script>

<style scoped>
.title {
  font-size: 30px;
  color: red;
}
</style>