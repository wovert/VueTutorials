let GoodsModel = {}

// 获取所有商品数据
GoodsModel.getGoodsList = function () {
  return JSON.parse(window.localStorage.getItem('goodsList') || '{}')
}

// 保存商品
GoodsModel.saveGoods = function (goodsList) {
  // 本地存储
  window.localStorage.setItem('goodsList', JSON.stringify(goodsList))
}

GoodsModel.add = function (goods) {
  // 判断当前goodsList中是否包含该商品，有则追加，无则赋值
  let goodsList = this.getGoodsList()
  if (goodsList[goods.id]) {
    // 该 key 做追加
    goodsList[goods.id] += goods.num
  } else {
    goodsList[goods.id] = goods.num
  }

  // 保存数据
  this.saveGoods(goodsList)
}

// 获取购物车数量总数
GoodsModel.getTotalCount = function () {
  let goodsList = this.getGoodsList()
  let values = Object.values(goodsList)
  let sum = 0
  values.forEach(val => {
    sum += val
  })
  return sum
}

export default GoodsModel
