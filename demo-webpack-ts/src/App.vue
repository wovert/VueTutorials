<template>
  <div>
    <input v-model="msg">
    <p>prop: {{ propMessage }}</p>
    <p>msg: {{ msg }}</p>
    <p>helloMsg: {{ helloMsg }}</p>
  </div>
</template>
 
<script lang="ts">
import Vue from 'vue'
const AppProps = Vue.extend({
  props: {
    propMessage: String
  }
})
export default class App extends AppProps {
  // inital data
  msg: number = 123

// use prop values for initial data
  helloMsg: string = 'Hello, ' + this.propMessage
}
</script>