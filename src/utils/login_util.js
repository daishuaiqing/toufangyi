
import wepy from 'wepy'
import { getRequest } from "../utils/request"

// 不是首次登录就应该验证token
export function check_token(token) {
  console.log('有token,验证token')
  getRequest({url: '/ums/user/check/token'}).then(res => {
    if (res.data.code === 200) {
      console.log('token有效')
      wepy.setStorageSync('logged', true)
    } else {
      console.log('token无效')
      wepy.redirectTo({ url: '/packageB/choose_identify' })
      wepy.setStorageSync('logged', false)
    }
  })
}