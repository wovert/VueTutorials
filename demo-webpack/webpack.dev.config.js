module.exports = {
  // 1. 入口
  entry: {
    // 可以有多个入口
    'main': './main.js'
  },

  //  2. 输出
  output: {
    filename: './build.js'
  },

  // 3. 监视文件发生改动，自动编译build.js
  watch: true
}