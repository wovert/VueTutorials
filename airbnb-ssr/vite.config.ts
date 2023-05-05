import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    /** 项目环境变量 */
    // 'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV)
  },
  resolve: {
    /** 添加alias规则 */
    alias: [
      {
        find: '@/',
        replacement: '/src/'
      }
    ],
  }
})
