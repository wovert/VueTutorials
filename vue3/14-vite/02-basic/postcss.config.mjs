// module.exports = {
//     plugins: [
//         require('postcss-preset-env')
//     ]
// }


import { defineConfig } from 'vite'
import postcss from 'postcss-preset-env'

export default defineConfig({
  plugins: [
    postcss()
  ]
})