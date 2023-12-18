import { createStore } from 'vuex'
import home from './modules/home'
import user from './modules/user'
import { INCREMENT_N } from './mutation-types'
import axios from 'axios'
// 创建仓库
const store = createStore({
  state() {
    return {
      rootCounter: 100,
      rootName: 'root' + new Date().getTime(),
      rootAge: 18,
      rootHeight: 180,
      books: [
        {
          name: '深入Vue.js',
          price: 200,
          count: 3
        },
        {
          name: '深入Webpack',
          price: 200,
          count: 2
        },
        {
          name: '深入React',
          price: 600,
          count: 6
        },
        {
          name: '深入Linux',
          price: 900,
          count: 1
        },
      ],
      banners: [],
      discount: 0.5 // 打5折
    }
  },
  // state值变化其他值
  getters: {
    booksTotalPrice(state, getters) {
      let totalPrice=  0
      for(const book of state.books) {
        totalPrice += book.count * book.price
      }
      return totalPrice
    },
    booksDiscountTotalPrice(state, getters) {
      return getters.booksTotalPrice * getters.currentDiscount
    },
    // 折扣的基础上再打9折
    currentDiscount(state) {
      return state.discount * 0.9
    },
    booksTotalCountGreaterN(state, getters) {
      return function(n) {
        let totalPrice=  0
        for(const book of state.books) {
          if (book.count <= n) {
            totalPrice += book.count * book.price
          }
        }
        return totalPrice
      }
    },
    increment(state) {
      return state.rootCounter * 2
    }
  },
  mutations: {
    increment(state) {
      state.rootCounter++
      state.rootAge++
    },
    doubleIncrement(state){
      state.rootCounter *= 2 
      state.rootAge *= 2 
    },
    decrement(state) {
      state.rootCounter--
      state.rootAge--
    },
    changeName(state) {
      state.rootName = 'change' + new Date().getTime()
    },
    changeHeight(state) {
      state.rootHeight++
    },
    // 10 -> payload
    // {n: 10, name: "why", age: 18} -> payload
    [INCREMENT_N](state, payload) {
      console.log(payload);
      state.rootCounter += payload.n
    },
    addBannerData(state, payload) {
      state.banners = payload
    }
  },
  actions: {
    // 放函数
    // 1.参数问题
    incrementAction(context, payload) {
      console.log(payload)
      setTimeout(() => {
        context.commit('increment')
      }, 1000);
    },
    // 2.context的其他属性
    decrementAction({ commit, dispatch, state, rootState, getters, rootGetters }) {
      commit("decrement")
    },
    getHomeMultidata(context) {
      return new Promise((resolve, reject) => {
        axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
          context.commit("addBannerData", res.data.data.banner.list)
          resolve({name: "coderwhy", age: 18})
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
  modules: {
    home,
    user
  }
})

// 导出仓库
export default store
