
import wepy from 'wepy'
import { getRequest } from "../utils/request"

// 验证token
export async function check_token(token) {
  console.log('有token,验证token')
  await getRequest({url: '/ums/user/check/token'}).then(res => {
    if (res.data.code === 200) {
      console.log('token有效')
      wx.setStorageSync('logged', true)
    } else {
      console.log('token无效')
      wx.setStorageSync('logged', false)
    }
  })
  // this.$apply()
}

