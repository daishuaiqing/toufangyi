
import wepy from 'wepy'
import * as LoginApi from '../api/login'

// 检查是否注册过
export function checkphonewechat() {
   var userPhone = wx.getStorageSync('referUserPhoneNo')
   if (userPhone) {
     wepy.setStorageSync('logged', true)
   } else {
     wepy.setStorageSync('logged', false)
   }
   let logged = wepy.getStorageSync('logged')
   console.log(logged, '当前登录状态')
   var that = this
   if (logged) {
     wx.showLoading({
       title: '正在检查登录状态...',
       mask: true,
       duration: 2000
     })
     wx.hideLoading()
   } else {
     wepy.showToast({
       title: '您还未登录',
       icon: 'none',
       duration: 3000,
     })
     // 先去登录
     wepy.redirectTo({ url: '/packageB/choose_identify' })
   }
}