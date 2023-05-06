import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// element-plus 按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // element-plus 按需导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  define: {
    /** 项目环境变量 */
    // 'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV)
  },
  resolve: {
    /** 添加alias规则 */
    // alias: [
    //   {
    //     find: '@/',
    //     replacement: '/src/'
    //   }
    // ],
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  }
})
