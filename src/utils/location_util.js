
// import wepy from 'wepy'

// const APP_KEY = 'TAPBZ-6BERP-AD2DG-LHSOQ-VIBOV-HHB5X'

// export async function getLocation() {

//   let location = await wepy.getLocation({
//     type: 'gcj02',
//   })
//   let url = `https://apis.map.qq.com/ws/geocoder/v1/?location=${location.latitude},${location.longitude}&key=${APP_KEY}`
//   let res = await wepy.request(url)
//   if (res.data.status === 0) {
//     location.address = res.data.result.address
//   } else {
//     throw new Error('地址解析失败 状态码' + res.data.status)
//   }
//   return location
// }
 