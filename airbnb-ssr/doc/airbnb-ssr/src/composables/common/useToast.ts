import { ref } from 'vue'

export default function useToast() {
  // toast 的封装
  const visible = ref(false)
  let timer: any
  function showToast(duration: number) {
    visible.value = true
    clearTimeout(timer)
    timer = setTimeout(() => {
      visible.value = false
    }, duration)
  }
  return {
    visible,
    showToast
  }
}
