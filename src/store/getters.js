export default {

  // 商家评价的总数量
  ratingsTotalCount (state) {
    return state.ratings.length
  },

  // 商家满意评价的总数量
  ratingsPositiveCount (state) {
    return state.ratings.reduce((preCount, rating) => preCount + (rating.rateType===0?1:0), 0)
  }
}