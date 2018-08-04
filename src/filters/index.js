/*
自定义过滤器模块
 */
import Vue from 'vue'
import moment from 'moment'

/*
格式化日期日间
 */
Vue.filter('date-format', function (value, format='YYYY-MM-DD HH:mm:ss') {
  return moment(value).format(format)
})
