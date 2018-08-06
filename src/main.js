import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'

import App from './App.vue'
import router from './router'
import store from './store'
import Split from './components/Split/Split.vue'

import './mock/mockServer'
import './filters'  // 加载自过滤器
import loading from './common/imgs/loading.gif'

// 声明使用vue插件
Vue.use(VueLazyload, { // 内部会定义一个全局的指令lazy
  loading
})

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
