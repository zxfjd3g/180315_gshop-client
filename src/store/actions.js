import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER
} from './mutation-types'
import {
  reqAddress,
  reqCategorys,
  reqShops
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
  }
}