import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

/* eslint-disable  */
new Vue({
  el: '#app',
  render: h => h(App),
  router, // 配置路由器
  store, //配置vuex的store
})
