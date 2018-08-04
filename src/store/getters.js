export default {

  // 商家评价的总数量
  ratingsTotalCount (state) {
    return state.ratings.length
  },

  // 商家满意评价的总数量
  ratingsPositiveCount (state) {
    return state.ratings.reduce((preCount, rating) => preCount + (rating.rateType===0?1:0), 0)
  },

  // 购物车food总数量
  cartFoodCount (state) {
    return state.cartFoods.reduce((preCount, food) => preCount + food.count, 0)
  },

  // 购物车food总价格
  cartFoodPrice (state) {
    return state.cartFoods.reduce((preCount, food) => preCount + food.count*food.price, 0)
  }
}