const baseURL = "http://192.168.43.23:9000"
import wepy from 'wepy'
// get方法
function getRequest(obj) {
    return new Promise((resolve, reject) => {
        wx.request({
          url: baseURL + obj.url,
          method: 'GET',
          dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
          success: res => {
              resolve(res)
          },
          fail: (err) => {
              reject(err)
          },
          complete: () => {}
        })
    })
}
// post方法
function postRequest(obj, data) {
    return new Promise((resolve, reject) => {
        wx.request({
          url: baseURL + obj.url,
          data: data,
          method: 'post',
          header: {
            'content-type': 'application/json'
          },
          dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
          success: res => {
              resolve(res)
          },
          fail: (err) => {
              reject(err)
          },
          complete: () => {}
        })
    })
}

module.exports = {
    getRequest: getRequest,
    postRequest: postRequest
}


//使用 const request = request('../utils/request.js')
//var banner = request({url:''})
//var p =Promise.all([banner])
// p.then(res=> {})
//或者request({url:''}).then(res=> {})