/*
路由器
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用import()引入模块, webpack会对组件进行拆分(单独)打包(code split)
const Msite = () => import('../pages/Msite/Msite.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')

/*import Msite from '../pages/Msite/Msite.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'*/
import Login from '../pages/Login/Login.vue'

import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'

import a from '../pages/test/a.vue'
import b from '../pages/test/b.vue'
import b1 from '../pages/test/b1.vue'
import b2 from '../pages/test/b2.vue'

// 声明使用插件
Vue.use(VueRouter)

const router = new VueRouter({ // 配置对象
  // 配置应用中所有路由
  routes: [
    {
      path: '/msite',
      component: Msite, // 返回组件的函数, 需要时才执行从后台请求获取对应的打包文件
      meta: {
        showFoot: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/login',
      component: Login
    },

    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        },
      ]
    },
    {
      path: '/',
      redirect: '/msite'
    },

    {
      path: '/a',
      component: a
    },
    {
      path: '/b',
      component: b,
      children: [
        {
          path: '/b/b1',
          component: b1
        },
        {
          path: '/b/b2',
          component: b2
        },
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from, Vue.$store)
  const userid = Vue.$store.state.user._id
  const {path} = to
  if(!userid && (path==='/a' || path==='/b')) {
    return next('/login') // 自动跳转到登陆
  }
  next()  // 放行
})

export default router
