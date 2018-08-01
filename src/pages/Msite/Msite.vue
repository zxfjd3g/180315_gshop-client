<template>
  <div class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(c, index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImgUrl + c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'

  export default {

    data () {
      return {
        baseImgUrl: 'https://fuss10.elemecdn.com'
      }
    },

    computed: {
      ...mapState(['address', 'categorys']),
      // 根据一维数据categorys生成一个二维数组categorysArr
      categorysArr () {
        // 二维空数组
        const arr = []
        // 内部小空数组
        let smallArr = []
        // 遍历一维数组
        this.categorys.forEach(c => {

          // 将空/新的数组需要放到大数组
          if(smallArr.length===0) {
            arr.push(smallArr)
          }

          // 保存到小数组中
          smallArr.push(c)

          // 如果小数组已满, 需要创建一个新的小空数组
          if(smallArr.length===8) {
            smallArr = []
          }

        })


        return arr
      }
    },
    mounted () {

      // 请求后台获取shops
      this.$store.dispatch('getShops')
      // 请求后台获取categorys
      this.$store.dispatch('getCategorys')

      // 使用定时器不是太好(时间不好判断)
      /*setTimeout(() => {
        // 创建Swiper的实例对象, 实现轮播(必须在列表数据显示之后)
        new Swiper('.swiper-container', {
          loop: true, // 循环轮播
          pagination: {  // 分页器
            el: '.swiper-pagination',
          },
        })
      }, 1000)*/
    },

    watch: {
      // watch的回调函数是同步执行的
      categorys (val) { // categorys已更新到状态中了, 后面才异步更新界面

        // 调用 vm.$nextTick( [callback] )  将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它
        this.$nextTick(() => {
          // 创建Swiper的实例对象, 实现轮播(必须在列表数据显示之后)
          new Swiper('.swiper-container', {
            loop: true, // 循环轮播
            pagination: {  // 分页器
              el: '.swiper-pagination',
            },
          })
        })
      }
    },



    components: {
      HeaderTop,
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .msite //首页
    width 100%

    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          > span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>