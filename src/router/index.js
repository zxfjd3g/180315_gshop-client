/*
路由器
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({ // 配置对象
  // 配置应用中所有路由
  routes: [
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/',
      redirect: '/msite'
    },
  ]
})
