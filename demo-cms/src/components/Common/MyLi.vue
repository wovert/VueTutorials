<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'my-li',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  li {
    float: left;
    width: 33.333333%;
    background: white;
    height: 5.714286rem;
    text-align: center;
    line-height: 5.714286rem;
  }
</style>
