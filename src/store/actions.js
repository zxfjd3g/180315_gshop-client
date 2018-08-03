import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS
} from './mutation-types'
import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUser,
  reqLogout,
  reqRatings,
  reqGoods,
  reqInfo
} from '../api'

export default {

  // 异步获取当前地址信息
  async getAddress ({commit, state}) {
    // 调用接口请求函数从后台获取数据
    const {latitude, longitude} = state
    const geohash = `${latitude},${longitude}`
    const result = await reqAddress(geohash) // {code: 0, data: address}
    if(result.code===0) {
      // commit
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  // 异步获取商品分类列表
  async getCategorys ({commit, state}) {
    // 调用接口请求函数从后台获取数据
    const result = await reqCategorys()
    if(result.code===0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  // 异步获取商家列表
  async getShops ({commit, state}) {
    // 调用接口请求函数从后台获取数据
    const {latitude, longitude} = state
    const result = await reqShops(longitude, latitude)
    if(result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  // 同步保存user
  saveUser ({commit}, user) {
    commit(RECEIVE_USER, {user})
  },

  // 异步获取用户信息
  async getUser ({commit}) {
    const result = await reqUser()
    if(result.code===0) {
      const user = result.data
      commit(RECEIVE_USER, {user})
    }
  },

  // 异步退出登陆
  async logout ({commit}) {
    const result = await reqLogout()
    if(result.code===0) {
      commit(RESET_USER)
    }
  },

  // 异步获取商品列表
  async getGoods ({commit, state}, cb) {
    // 调用接口请求函数从后台获取数据
    const result = await reqGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      // 数据更新之后执行回调函数
      cb && cb()
    }
  },

  // 异步获取评价列表
  async getRatings ({commit, state}) {
    // 调用接口请求函数从后台获取数据
    const result = await reqRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },

  // 异步获取商家信息
  async getInfo ({commit, state}) {
    // 调用接口请求函数从后台获取数据
    const result = await reqInfo()
    if(result.code===0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
}