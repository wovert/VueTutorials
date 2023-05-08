import TypeObjectStore from '../type' // 引入类型别名

const webOrder: TypeObjectStore =
{
  keyPath: 'orderId',
  indexs: ['title', 'personNumber', 'pictureUrl', 'price']
}

const orderObjectStore =
{
  web_order: webOrder
}

export default orderObjectStore
