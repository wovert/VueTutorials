import { sum } from './js/math'
const { priceFormat } = require('./js/format')

// 导入才能打包
import './js/element'
// import './css/style.css'

console.log(sum(10, 2))
console.log(priceFormat())


const message = 'hello world'
const names = ['abc', 'cba', 'nba']

names.forEach(item => {
  console.log(item)
})
console.log(message)

