/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,ts}'
  ], // 那些文件需要扫描以茶渣使用的类名
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        whopper: '#8a1216'
      }
    },
  },
  plugins: [],
}

