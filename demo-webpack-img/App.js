import img from './img.png'

export default {
  template: `<div>
    <img :src="imgSrc" />
  </div>`,
  data() {
    return {
      imgSrc: img
    }
  }
}