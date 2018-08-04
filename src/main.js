import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import Split from './components/Split/Split.vue'

import './mock/mockServer'

// 注册全局组件标签
Vue.component(Button.name, Button)
Vue.component('Split', Split)

/* eslint-disable  */
new Vue({
  el: '#app',
  render: h => h(App),
  router, // 配置路由器
  store, //配置vuex的store
})
