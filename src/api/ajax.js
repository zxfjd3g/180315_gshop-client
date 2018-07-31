/*
发送ajax请求的函数模块
函数的返回值是promise对象
 */
import axios from 'axios'

export default function ajax(url, data={}, type='GET') {

  // 返回一个自己创建的promsie对象, 为了能得到的不是response, 而是response.data的数据
  return new Promise(function (resolve, reject) {
    let promsie
    if(type==='GET') {// GET请求
      // 将data中所有数据作为请求参数拼到url中
      // /register?username=tom&password=123
      let queryStr = ''
      Object.keys(data).forEach(key => {  // keys()得到对象自身的所有属性名组成的数组
        const value = data[key]
        queryStr += key + '=' + value + '&'
      })
      if(queryStr) { // username=tom&password=123&-->username=tom&password=123
        // 去除最后的&
        queryStr = queryStr.substring(0,queryStr.length-1) // username=tom&password=123
        queryStr = '?' + queryStr //?username=tom&password=123
      }

      promsie = axios.get(url + queryStr)
    } else { // POST请求
      promsie = axios.post(url, data)
    }

    promsie.then(response => {
      // 请求成功
      resolve(response.data)
    }).catch(error => {
      // 请求失败
      reject(error)
    })
  })
}
/*
const promise = ajax('/xxx')
promise.then(response => {
  const result = response.data

})
const response = await ajax('/xxx')
const result = response.data

const result = await ajax('/xxx')
*/
