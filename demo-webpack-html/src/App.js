import img from './img.png'

export default {
  template: `<div>
    <img :src="imgSrc" />
    <h1>html-webpack-plugin模板</h1>
  </div>`,
  data() {
    return {
      imgSrc: img
    }
  }
}