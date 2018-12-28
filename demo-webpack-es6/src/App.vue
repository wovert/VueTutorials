import img from './img.png'

export default {
  template: `<div>
    <img :src="imgSrc" />
    <h1>webpack-dev-server-auto reload</h1>
  </div>`,
  data() {
    return {
      imgSrc: img
    }
  }
}