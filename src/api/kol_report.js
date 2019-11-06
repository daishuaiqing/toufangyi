/**
 * Created by willgordon on 17/6/26.
 */


//

import wepy from 'wepy'
import { decrypt } from '../utils/crypto'
import { stringify } from 'querystring'
// import CookieUtil from '../utils/cookie_util'
const defaultOption = {
  pageSize: 20,
  // pageIndex: 0,
  // specialZone: 'express',
  fromCity: '',
  toCity: '',
  loadProTime: '',
  useType: '',
  truckTypeFlags: '',
  loadLimitFlags: '',
  truckLengthFlags: ''
}

export async function emptyReport(location) {
  return location

  // let body = stringify({ latitude: location.latitude, longitude: location.longitude })
  // let res = await wepy.request({
  //   url: 'https://https.ttyhuo.com/mvc/v3/sjb/empty/report',
  //   header: {
  //     'Authorization': 'aa0b780a5c242d26424c5f7dfd3c0294',
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Cookie': CookieUtil.getLocalCookieString()
  //   },
  //   data: body,
  //   method: 'POST'
  // })
  // let ret = res.data
  // if (ret.hasOwnProperty('retcode')) {
  //   if (ret.retcode === 0) {
  //     return location
  //   } else {
  //     let error = new Error(ret.msg)
  //     error.is_internal = true
  //     error.code = ret.retcode
  //     throw error
  //   }
  // } else {
  //   throw new Error('服务器数据错误')
  // }
}

export async function searchKol(option) {

  option = Object.assign({}, defaultOption, option)

  let kols = [
    {
      "kolID": 44864737,
      "userName": '鹿小英',
      "faceImgUrl": 'https://up.enterdesk.com/edpic_source/ad/d7/2d/add72da3d716f887c941c8b880b405fb.jpg',
      "fans_num": {displayText: '5W+', beginNum: 50000},
      "payment": {
        "key": 4,
        "value": "500-1000元",
        "beginVal": "500",
        "endVal": "1000"
      },
      platform_data: [
        {
          kolPlatformID: 1,
          platformUserId: '鹿小英',
          platformUserLink: 'http://xiaohongshu.com',
          ptext: 'xxxxxxxxxx',
          platform: {displayText: '微博', platformId: 10000},
          fans_num: {displayText: '5W+', beginNum: 50000},
          payment: {
            "key": 4,
            "value": "500-1000元",
            "beginVal": "500",
            "endVal": "1000"
          },
          paymentIndex: 0,
          contentType: {displayText: '美妆类', contentTypeId: 2000},
          isMine: false,
        },
        {
          kolPlatformID: 2,
          platformUserId: '鹿小英',
          platformUserLink: 'http://xiaohongshu.com',
          ptext: 'xxxxxxxxxx',
          platform: {displayText: '抖音', platformId: 2000},
          fans_num: {displayText: '10W+', beginNum: 100000},
          payment: {
            "key": 4,
            "value": "500-1000元",
            "beginVal": "500",
            "endVal": "1000"
          },
          paymentIndex: 0,
          contentType:
            {displayText: '美妆类', contentTypeId: 2000},
          isMine: false,
        }
      ]
    },
    {
      "kolID": 44864737,
      "userName": '鹿小英',
      "faceImgUrl": 'https://up.enterdesk.com/edpic_source/ad/d7/2d/add72da3d716f887c941c8b880b405fb.jpg',
      "fans_num": {displayText: '5W+', beginNum: 50000},
      "payment": {
        "key": 4,
        "value": "500-1000元",
        "beginVal": "500",
        "endVal": "1000"
      },
      platform_data: [
        {
          kolPlatformID: 1,
          platformUserId: '鹿小英',
          platformUserLink: 'http://xiaohongshu.com',
          ptext: 'xxxxxxxxxx',
          platform: {displayText: '微博', platformId: 10000},
          fans_num: {displayText: '5W+', beginNum: 50000},
          payment: {
            "key": 4,
            "value": "500-1000元",
            "beginVal": "500",
            "endVal": "1000"
          },
          paymentIndex: 0,
          contentType: {displayText: '美妆类', contentTypeId: 2000},
          isMine: false,
        },
        {
          kolPlatformID: 2,
          platformUserId: '鹿小英',
          platformUserLink: 'http://xiaohongshu.com',
          ptext: 'xxxxxxxxxx',
          platform: {displayText: '抖音', platformId: 2000},
          fans_num: {displayText: '10W+', beginNum: 100000},
          payment: {
            "key": 4,
            "value": "500-1000元",
            "beginVal": "500",
            "endVal": "1000"
          },
          paymentIndex: 0,
          contentType:
            {displayText: '美妆类', contentTypeId: 2000},
          isMine: false,
        }
      ]
    },
    {
      "kolID": 44864737,
      "userName": '鹿小英',
      "faceImgUrl": 'https://up.enterdesk.com/edpic_source/ad/d7/2d/add72da3d716f887c941c8b880b405fb.jpg',
      "fans_num": {displayText: '5W+', beginNum: 50000},
      "payment": {
        "key": 4,
        "value": "500-1000元",
        "beginVal": "500",
        "endVal": "1000"
      },
      platform_data: [
        {
          kolPlatformID: 1,
          platformUserId: '鹿小英',
          platformUserLink: 'http://xiaohongshu.com',
          ptext: 'xxxxxxxxxx',
          platform: {displayText: '微博', platformId: 10000},
          fans_num: {displayText: '5W+', beginNum: 50000},
          payment: {
            "key": 4,
            "value": "500-1000元",
            "beginVal": "500",
            "endVal": "1000"
          },
          paymentIndex: 0,
          contentType: {displayText: '美妆类', contentTypeId: 2000},
          isMine: false,
        },
        {
          kolPlatformID: 2,
          platformUserId: '鹿小英',
          platformUserLink: 'http://xiaohongshu.com',
          ptext: 'xxxxxxxxxx',
          platform: {displayText: '抖音', platformId: 2000},
          fans_num: {displayText: '10W+', beginNum: 100000},
          payment: {
            "key": 4,
            "value": "500-1000元",
            "beginVal": "500",
            "endVal": "1000"
          },
          paymentIndex: 0,
          contentType:
            {displayText: '美妆类', contentTypeId: 2000},
          isMine: false,
        }
      ]
    },
    {
      "kolID": 44864737,
      "userName": '鹿小英',
      "faceImgUrl": 'https://up.enterdesk.com/edpic_source/ad/d7/2d/add72da3d716f887c941c8b880b405fb.jpg',
      "fans_num": {displayText: '5W+', beginNum: 50000},
      "payment": {
        "key": 4,
        "value": "500-1000元",
        "beginVal": "500",
        "endVal": "1000"
      },
      platform_data: [
        {
          kolPlatformID: 1,
          platformUserId: '鹿小英',
          platformUserLink: 'http://xiaohongshu.com',
          ptext: 'xxxxxxxxxx',
          platform: {displayText: '微博', platformId: 10000},
          fans_num: {displayText: '5W+', beginNum: 50000},
          payment: {
            "key": 4,
            "value": "500-1000元",
            "beginVal": "500",
            "endVal": "1000"
          },
          paymentIndex: 0,
          contentType: {displayText: '美妆类', contentTypeId: 2000},
          isMine: false,
        },
        {
          kolPlatformID: 2,
          platformUserId: '鹿小英',
          platformUserLink: 'http://xiaohongshu.com',
          ptext: 'xxxxxxxxxx',
          platform: {displayText: '抖音', platformId: 2000},
          fans_num: {displayText: '10W+', beginNum: 100000},
          payment: {
            "key": 4,
            "value": "500-1000元",
            "beginVal": "500",
            "endVal": "1000"
          },
          paymentIndex: 0,
          contentType:
            {displayText: '美妆类', contentTypeId: 2000},
          isMine: false,
        }
      ]
    },
  ]

  // if (Array.isArray(kols) && kols.length > 0) {
  //   kols.forEach(setExtraData)
  // }
  if (kols) {
    return kols
  }
}
