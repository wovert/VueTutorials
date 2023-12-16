import '../css/style.css'
import '../css/title.less'
import '../css/title.scss'
import '../css/title.styl'
import '../css/image.css'
import '../font/iconfont.css'
import img from '../img/zznh.png'

const ele = document.createElement('div')
ele.className = 'title'
ele.innerHTML = 'hello world'

// 设置背景图片
const bgImgEle = document.createElement('div')
bgImgEle.className = 'image-bg'

// 设置元素的src
const imgEle = document.createElement('img')
// imgEle.src = '../img/zznh.png' // fatal load image
imgEle.src = img

// i元素
const iEle = document.createElement('i')
iEle.className = 'iconfont icon-ashbin'

// console.log(content.length)

async function getComponent() {
    const element = document.createElement('div')
    // 动态加载 lodash 库
    const { default: _ } = await import('lodash')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    return element
}
  
setTimeout(async() => {
    getComponent().then((component) => {
        document.body.appendChild(component)
    })
}, 4000)


document.body.appendChild(ele)
document.body.appendChild(bgImgEle)
document.body.appendChild(imgEle)
document.body.appendChild(iEle)

console.log('》》》》》》》》》》》')