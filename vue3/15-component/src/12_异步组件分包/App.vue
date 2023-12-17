<template>
  <div>
    App组件
    <home></home>

    <!-- 实验性特性：default显示内容 fallback:default无法显示，显示fallback -->
    <suspense>
      <!-- #default默认插槽 -->
      <template #default>
        <async-category></async-category>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </suspense>

  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue'

  import Home from './Home'
  import Loading from './Loading'

  // import AsyncCategory from './AsyncCategory.vue';

  // 打包之后，异步加载组件
  const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory"))

  // const AsyncCategory = defineAsyncComponent({
  //   loader: () => import("./AsyncCategory.vue"),
  //   loadingComponent: Loading, // 占位组件
  //   // errorComponent,
  //   delay: 2000, // 在显示loadingComponent组件之前, 等待多长时间
  //   /**
  //    * err: 错误信息,
  //    * retry: 函数, 调用retry尝试重新加载
  //    * attempts: 记录尝试的次数
  //    */
  //   onError: function(err, retry, attempts) {

  //   }
  // })

  export default {
    components: {
      Home,
      AsyncCategory,
      Loading
    }
  }
</script>

<style scoped>

</style>