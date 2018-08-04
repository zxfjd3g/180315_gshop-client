import Vue from 'vue'
import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './mutation-types'
export default {

  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },

  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },

  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },

  [RECEIVE_USER] (state, {user}) {
    state.user = user
  },
  [RESET_USER] (state) {
    state.user = {}
  },
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },

  // 给food的count属性增加1
  [INCREMENT_FOOD_COUNT] (state, {food}) {
    if(food.count) {
      food.count++
    } else {
      // 新添加一个count属性, 指定值为1
      // food.count = 1  // 新加的属性没有数据绑定, 界面不会更新
      Vue.set(food, 'count', 1)  // 这样添加的属性是有数据绑定, 界面就会更新
    }
  },

  [DECREMENT_FOOD_COUNT] (state, {food}) {
    if(food.count) { // 当count>0才减1
      food.count--
    }

  },
}