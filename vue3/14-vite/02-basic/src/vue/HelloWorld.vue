<template>
    <h2 class="sub-title">{{ title }}</h2>
</template>

<script>
export default {
    data() {
        return {
            title: 'Hellow World 组件渲染出来的'
        }
    }
}
</script>

<style scoped>
    .sub-title {
        color: green;
        font-size: 20px;
    }
</style>