/*
自定义过滤器模块
 */
import Vue from 'vue'
//import moment from 'moment'
import format from 'date-fns/format'


/*
格式化日期日间
 */
Vue.filter('date-format', function (value, formatStr='YYYY-MM-DD HH:mm:ss') {
  // return moment(value).format(format)
  return format(value, formatStr)

})
