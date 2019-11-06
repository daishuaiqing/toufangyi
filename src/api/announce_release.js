import wepy from 'wepy'
// import { getLocalCookieString, saveResponseCookie } from '../utils/cookie_util'

export async function addBatchPreAnnounce(ptext) {

  return null

  let form = {
    ptext: ptext,
    from: 'weixin'
  }

  let cookieStr = getLocalCookieString()
  let referUser = wepy.getStorageSync('referUserPhoneNo')
  if (referUser) {
    cookieStr = cookieStr + ', referCode=' + referUser
  }

  // 本接口需要带上Cookie
  let res = await wepy.request({
    url: 'https://https.ttyhuo.com/mvc/v3/addBatchPreAnnounce',
    header: {
      'Authorization': 'aa0b780a5c242d26424c5f7dfd3c0294',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': cookieStr
    },
    data: form,
    method: 'POST'
  })
  let response = null
  try {
    response = res.data
    if(response.retcode){
      let error = new Error(response.msg)
      error.is_internal = true
      error.code = response.retcode
      throw error
    }
    saveResponseCookie(res.header)
  } catch (e) {
    if(e.is_internal){
      throw e
    }
    throw new Error('服务器数据错误');
  }
  return response
}

export async function getPreAnnounce(pageIndex, pageSize) {

  let announces = [
    {
      "announceID": 44864737,

      "owner": {
        "userID": 75768,
        "userName": "杨薇琦",
        "faceImgUrl": "https://up.enterdesk.com/edpic_source/ad/d7/2d/add72da3d716f887c941c8b880b405fb.jpg",

        "jobPosition": "MCN",
        "company": "上海XX有限公司",

        "mobileNo": "13162316166",
        "weixin": "ying126834",

        "verifyFlag": 3, // 认证标识
        "sfzVerify": true, // verifyFlag 对应
        "kolVerify": false, // verifyFlag 对应
        "companyVerify": true, // verifyFlag 对应

        "alreadyFavorite": false, // 是否关注发布人
        "totalAnnounceCount": 377, // 发布人所有的通告，包括删除的
        "totalValidAnnounceCount": 7, // 发布人所有的当前有效通告数量

        "source": 0, // 用户注册来源
        "sourceStr": 0, // 用户注册来源
        "createTime": 1495782581000, // 用户注册时间
        "createTimeStr": "11分钟前", // 用户注册时间

        "lastUpdateTime": 1495782581000, // 用户最后活跃时间
        "lastUpdateTimeStr": "11分钟前", // 用户最后活跃时间
        "lastLat": "0", // 用户最后位置
        "lastLng": "0", // 用户最后位置
        "lastAddr": "0", // 用户最后地址

        "invalidTime": 1495782581000, // 用户会员到期时间
        "invalidTimeStr": "11天后", // 用户会员到期时间

        "status": 2,
        "isExpired": false, // 来自invalidTime计算
        "valid": 1, // 来自status 和 invalidTime计算

        "isMySelf": false,
      },

      "title": "德国LSDM小样套装",
      "keyword": "",

      "platformStr": "小红书",
      "platformId": -1,
      "fansNumStr": "1w+",
      "fansNumBegin": 10000,

      "paymentStr": "50-200元",
      "tags":[
        "颜值高",
        "不拖稿"
      ],

      "addr": "",
      "city": "",

      "description": "1、推广时间在9月或者10月初\n2、颜值高的小姐姐优先，笔记需要收录\n3、粉丝要求1w以上，固定报价100元\n4、拖稿的小姐姐就不要来了",

      "recruitNum": 100,
      "appliedNum": 220,

      "createTime": 1495782581000,
      "lastUpdateTime": 1495782581000,
      "invalidTime": 1495782581000, // 报名截至时间
      "status": 2,

      "isClosed": false, // 来自status
      "isExpired": false, // 来自时间计算
      "valid": 1, // 来自status 和 时间计算

      "createTimeStr": "11分钟前",
      "lastUpdateTimeStr": "11分钟前",
      "invalidTimeStr": "11天后",

      "isMyAnnounce": false, // 是否自己的通告
      "alreadyFavorite": false, // 是否收藏通告

      "source": 0, // 通告发布来源
      "sourceStr": 0 // 通告发布来源
    },
    {
      "announceID": 44864737,

      "owner": {
        "userID": 75768,
        "userName": "杨薇琦",
        "faceImgUrl": "https://up.enterdesk.com/edpic_source/ad/d7/2d/add72da3d716f887c941c8b880b405fb.jpg",

        "jobPosition": "MCN",
        "company": "上海XX有限公司",

        "mobileNo": "13162316166",
        "weixin": "ying126834",

        "verifyFlag": 3, // 认证标识
        "sfzVerify": true, // verifyFlag 对应
        "kolVerify": false, // verifyFlag 对应
        "companyVerify": true, // verifyFlag 对应

        "alreadyFavorite": false, // 是否关注发布人
        "totalAnnounceCount": 377, // 发布人所有的通告，包括删除的
        "totalValidAnnounceCount": 7, // 发布人所有的当前有效通告数量

        "source": 0, // 用户注册来源
        "sourceStr": 0, // 用户注册来源
        "createTime": 1495782581000, // 用户注册时间
        "createTimeStr": "11分钟前", // 用户注册时间

        "lastUpdateTime": 1495782581000, // 用户最后活跃时间
        "lastUpdateTimeStr": "11分钟前", // 用户最后活跃时间
        "lastLat": "0", // 用户最后位置
        "lastLng": "0", // 用户最后位置
        "lastAddr": "0", // 用户最后地址

        "invalidTime": 1495782581000, // 用户会员到期时间
        "invalidTimeStr": "11天后", // 用户会员到期时间

        "status": 2,
        "isExpired": false, // 来自invalidTime计算
        "valid": 1, // 来自status 和 invalidTime计算

        "isMySelf": false,
      },

      "title": "日本Ceruru.b身体乳",
      "keyword": "",

      "platformStr": "小红书",
      "platformId": -1,
      "fansNumStr": "5w+",
      "fansNumBegin": 50000,

      "paymentStr": "报酬详谈",
      "tags":[
        "颜值高",
        "报价合理",
        "不拖稿"
      ],

      "addr": "",
      "city": "",

      "description": "1、推广时间在9月或者10月初\n2、颜值高的小姐姐优先，笔记需要收录\n3、粉丝要求5w以上，请合理报价，天价不选\n4、拖稿的小姐姐就不要来了",

      "recruitNum": 100,
      "appliedNum": 220,

      "createTime": 1495782581000,
      "lastUpdateTime": 1495782581000,
      "invalidTime": 1495782581000, // 报名截至时间
      "status": 2,

      "isClosed": false, // 来自status
      "isExpired": false, // 来自时间计算
      "valid": 1, // 来自status 和 时间计算

      "createTimeStr": "11分钟前",
      "lastUpdateTimeStr": "11分钟前",
      "invalidTimeStr": "11天后",

      "isMyAnnounce": false, // 是否自己的通告
      "alreadyFavorite": false, // 是否收藏通告

      "source": 0, // 通告发布来源
      "sourceStr": 0 // 通告发布来源
    },
  ]
  let response = {}
  response.preAnnounces = announces
  return response

  let form = {
    pageIndex: pageIndex,
    pageSize: pageSize,
    from: 'weixin'
  }

  let cookieStr = getLocalCookieString()
  let referUser = wepy.getStorageSync('referUserPhoneNo')
  if (referUser) {
    cookieStr = cookieStr + ', referCode=' + referUser
  }

  // 本接口需要带上Cookie
  let res = await wepy.request({
    url: 'https://https.ttyhuo.com/mvc/v3/getPreAnnounce',
    header: {
      'Authorization': 'aa0b780a5c242d26424c5f7dfd3c0294',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': cookieStr
    },
    data: form,
    method: 'POST'
  })
  // let response = null
  try {
    response = res.data
    if(response.retcode){
      let error = new Error(response.msg)
      error.is_internal = true
      error.code = response.retcode
      throw error
    }
    saveResponseCookie(res.header)
  } catch (e) {
    if(e.is_internal){
      throw e
    }
    throw new Error('服务器数据错误');
  }
  let preAnnounces = response.preAnnounces
  // 拼接额外信息
  if (Array.isArray(preAnnounces) && preAnnounces.length > 0) {
    preAnnounces.forEach(setExtraData)
  }
  return response
}

export async function batchCancelPreAnnounce(preAnnounceIDs) {
  return null

  let form = {
    preAnnounceIDs: preAnnounceIDs,
    from: 'weixin'
  }

  let cookieStr = getLocalCookieString()
  let referUser = wepy.getStorageSync('referUserPhoneNo')
  if (referUser) {
    cookieStr = cookieStr + ', referCode=' + referUser
  }

  // 本接口需要带上Cookie
  let res = await wepy.request({
    url: 'https://https.ttyhuo.com/mvc/v3/batchCancelPreAnnounce',
    header: {
      'Authorization': 'aa0b780a5c242d26424c5f7dfd3c0294',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': cookieStr
    },
    data: form,
    method: 'POST'
  })
  let response = null
  try {
    response = res.data
    if(response.retcode){
      let error = new Error(response.msg)
      error.is_internal = true
      error.code = response.retcode
      throw error
    }
    saveResponseCookie(res.header)
  } catch (e) {
    if(e.is_internal){
      throw e
    }
    throw new Error('服务器数据错误');
  }
  return response
}

export async function batchReleasePreAnnounce(preAnnounceIDs) {
  return null

  let form = {
    preAnnounceIDs: preAnnounceIDs,
    from: 'weixin'
  }

  let cookieStr = getLocalCookieString()
  let referUser = wepy.getStorageSync('referUserPhoneNo')
  if (referUser) {
    cookieStr = cookieStr + ', referCode=' + referUser
  }

  // 本接口需要带上Cookie
  let res = await wepy.request({
    url: 'https://https.ttyhuo.com/mvc/v3/batchReleasePreAnnounce',
    header: {
      'Authorization': 'aa0b780a5c242d26424c5f7dfd3c0294',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': cookieStr
    },
    data: form,
    method: 'POST'
  })
  let response = null
  try {
    response = res.data
    if(response.retcode){
      let error = new Error(response.msg)
      error.is_internal = true
      error.code = response.retcode
      throw error
    }
    saveResponseCookie(res.header)
  } catch (e) {
    if(e.is_internal){
      throw e
    }
    throw new Error('服务器数据错误');
  }
  return response
}

export async function batchDisableAnnounce(announceIDs) {
  return null

  let form = {
    announceIDs: announceIDs,
    from: 'weixin'
  }

  let cookieStr = getLocalCookieString()
  let referUser = wepy.getStorageSync('referUserPhoneNo')
  if (referUser) {
    cookieStr = cookieStr + ', referCode=' + referUser
  }

  // 本接口需要带上Cookie
  let res = await wepy.request({
    url: 'https://https.ttyhuo.com/mvc/v3/announce_disable_batch_forH5',
    header: {
      'Authorization': 'aa0b780a5c242d26424c5f7dfd3c0294',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': cookieStr
    },
    data: form,
    method: 'POST'
  })
  let response = null
  try {
    response = res.data
    if(response.retcode){
      let error = new Error(response.msg)
      error.is_internal = true
      error.code = response.retcode
      throw error
    }
    saveResponseCookie(res.header)
  } catch (e) {
    if(e.is_internal){
      throw e
    }
    throw new Error('服务器数据错误');
  }
  return response
}

export async function batchRefreshAnnounce(announceIDs) {
  return null

  let form = {
    announceIDs: announceIDs,
    from: 'weixin'
  }

  let cookieStr = getLocalCookieString()
  let referUser = wepy.getStorageSync('referUserPhoneNo')
  if (referUser) {
    cookieStr = cookieStr + ', referCode=' + referUser
  }

  // 本接口需要带上Cookie
  let res = await wepy.request({
    url: 'https://https.ttyhuo.com/mvc/v3/announce_refresh_batch_json',
    header: {
      'Authorization': 'aa0b780a5c242d26424c5f7dfd3c0294',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': cookieStr
    },
    data: form,
    method: 'POST'
  })
  let response = null
  try {
    response = res.data
    if(response.retcode){
      let error = new Error(response.msg)
      error.is_internal = true
      error.code = response.retcode
      throw error
    }
    saveResponseCookie(res.header)
  } catch (e) {
    if(e.is_internal){
      throw e
    }
    throw new Error('服务器数据错误');
  }
  return response
}

function setExtraData(preannounce) {

  let extras = {}
  extras.fromCity = preannounce.fromCity.split(' ').pop()
  let toCitySegments = preannounce.toCity.split(' ')
  extras.toCity = toCitySegments.pop()
  extras.toCitySub = toCitySegments.pop()
  // 货物介绍

  let announce_info = ''
  if (preannounce.loadLimit) {
    if (announce_info) {
      announce_info = announce_info + ' / '
    }
    announce_info = announce_info + preannounce.loadLimit + '吨'
  }
  if (preannounce.truckTypeStr && preannounce.truckTypeStr != '不限') {
    if (announce_info) {
      announce_info = announce_info + ' / '
    }
    announce_info = announce_info + preannounce.truckTypeStr
  }
  if (preannounce.truckLength) {
    if (announce_info) {
      announce_info = announce_info + ' / '
    }
    announce_info = announce_info + preannounce.truckLength + '米'
  }
  extras.announce_info = announce_info

  preannounce.extras = extras
}
