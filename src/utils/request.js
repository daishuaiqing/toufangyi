import CONST from '../data/appconst'
import wepy from 'wepy'

let baseURL = CONST.HTTP_BASE_URL
// get
function getRequest(obj, data) {
    return new Promise((resolve, reject) => {
        var token = wepy.getStorageSync('token')
        // var token = 'bff0f884-0269-45c8-add3-8665db186549'
        wx.request({
          url: baseURL + obj.url,
          method: 'GET',
          data: data,
          header: {
            'token': token
          },
          dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
          success: res => {
              if (res.statusCode === 200) {
                resolve(res)
              }  
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
        var token = wepy.getStorageSync('token')
        // var token = 'bff0f884-0269-45c8-add3-8665db186549'
        wx.request({
          url: baseURL + obj.url,
          data: data,
          method: 'post',
          header: {
            'token': token,
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
