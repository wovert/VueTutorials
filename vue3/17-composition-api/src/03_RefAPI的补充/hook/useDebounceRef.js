import { customRef } from 'vue';

// 自定义ref 防抖
export default function(value, delay = 300) {
  let timer = null
  return customRef((track, trigger) => {
    return {
      get() {
        track() // 收集依赖
        return value;
      },
      set(newValue) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newValue
          trigger() // 触发更新
        }, delay)
      }
    }
  })
}
