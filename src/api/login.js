
import wepy from 'wepy'
// import { getLocalCookieString, saveResponseCookie } from '../utils/cookie_util'

/**
 * 验证服务器端有没有登录
 */
export async function serverSideLogout() {
  wepy.setStorageSync('loggedUser', '')
  return { type: 'logout', key: '' }
  /*
  let form = {
    from: 'weixin'
  }
  let res = await wepy.request({
    url: 'https://https.ttyhuo.com/mvc/v3/logoutJson',
    header: {
      'Authorization': 'aa0b780a5c242d26424c5f7dfd3c0294',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': getLocalCookieString()
    },
    data: form,
    method: 'GET'
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
  // 判断viewName ， 是注册还是登录还是发送失败
  if (response.viewName === 'user/login') {
    wepy.setStorageSync('loggedUser', '')
    return { type: 'logout', key: '' }
  } else if (response.viewName === 'err') {
    throw new Error(response.errMsg);
  }
  throw new Error('服务器数据错误');
  */
}

/**
 * 验证服务器端有没有登录
 */
export async function checkServerSideLogin() {

  wepy.setStorageSync('loggedUser', "")
  // 用户自动登录
  return { type: 'auto_login', key: '' }
  /*
  let form = {
    from: 'weixin'
  }
  let res = await wepy.request({
    url: 'https://https.ttyhuo.com/mvc/v3/dtLoginJson',
    header: {
      'Authorization': 'aa0b780a5c242d26424c5f7dfd3c0294',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': getLocalCookieString()
    },
    data: form,
    method: 'GET'
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
  // 判断viewName ， 是注册还是登录还是发送失败
  if (response.viewName === 'user/login') {
    throw new Error('服务器端登录失败')
  } else if (response.viewName === 'user/home') {
    let { loggedUser } = response
    wepy.setStorageSync('loggedUser', loggedUser)
    // 用户自动登录
    return { type: 'auto_login', key: '' }
  } else if (response.viewName === 'err') {
    throw new Error(response.errMsg);
  }
  throw new Error('服务器数据错误');
  */
}

export async function sendVerifyCodeSJB(phone) {
  let form = {
    accountNo: phone,
    from: 'weixin'
  }
  let res = await wepy.request({
    url: 'https://https.ttyhuo.com/mvc/v3/dtLoginNew',
    header: {
      'Authorization': 'aa0b780a5c242d26424c5f7dfd3c0294',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': getLocalCookieString()
    },
    data: form,
    method: 'POST'
  })
  let response = null
  try {
    response = res.data
    if(response.retcode !== 0){
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
  // 判断viewName ， 是注册还是登录还是发送失败
  if (response.viewName === 'user/login') {
    throw new Error('验证码发送失败')
  } else if (response.viewName === 'user/home') {
    let { loggedUser } = response
    wepy.setStorageSync('loggedUser', loggedUser)
    // 用户自动登录
    return { type: 'auto_login', key: '' }
  } else if (response.viewName === 'user/login/confirm') {
    // 用户登录，非注册
    return { type: 'login', key: response.loggingUserSnapShotKey }
  } else if (response.viewName === 'user/register') {
    // 用户注册, 此手机号码从来没用过App
    return { type: 'register', key: response.draftUserSnapShotKey }
  } else if (response.viewName === 'err') {
    throw new Error(response.errMsg);
  }
  throw new Error('服务器数据错误');
}

/**
 * 用验证码登录
 */
export async function loginWithConfirmCode(loginKey, code) {
  wepy.setStorageSync('loggedUser', "")
  return '登录成功'
  /*
  let form = {
    confirmCode: code,
    loggingUserSnapShotKey: loginKey,
    from: 'weixin',
  }

  let cookieStr = getLocalCookieString()
  let referUser = wepy.getStorageSync('referUserPhoneNo')
  if (referUser) {
    cookieStr = cookieStr + ', referCode=' + referUser
  }

  // 本接口需要带上Cookie

  let res = await wepy.request({
    url: 'https://https.ttyhuo.com/mvc/v3/login_confirmJsonNew',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': cookieStr
    },
    data: form,
    method: 'POST'
  })
  let response = null
  try {
    response = res.data
    saveResponseCookie(res.header)
  } catch (e) {
    throw new Error('服务器数据错误');
  }
  let { viewName } = response
  console.log(viewName)
  if (viewName === 'user/login/confirm' || viewName === 'user/register') {
    throw new Error('验证码不正确');
  } else if (viewName === 'user/login') {
    throw new Error('登录失败，系统异常');
  } else if (viewName === 'err') {
    let msg = response.errMsg || '登录失败';
    throw new Error(msg);
  } else if (viewName === 'user/home') {
    let { loggedUser } = response
    wepy.setStorageSync('loggedUser', loggedUser)
    return '登录成功'
  }
  throw new Error('服务器数据错误');
  */
}

export async function registerWithConfirmCode(loginKey, code) {
  let form = {
    confirmCode: code,
    draftUserSnapShotKey: loginKey,
    from: 'weixin',
  }
  let cookieStr = getLocalCookieString()
  let referUser = wepy.getStorageSync('referUserPhoneNo')
  if (referUser) {
    cookieStr = cookieStr + ', referCode=' + referUser
  }

  // 本接口需要带上Cookie
  let res = await wepy.request({
    url: 'https://https.ttyhuo.com/mvc/v3/registerJsonNew',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': cookieStr
    },
    data: form,
    method: 'POST'
  })
  let response = null
  try {
    response = res.data
    saveResponseCookie(res.header)
  } catch (e) {
    throw new Error('服务器数据错误');
  }
  let { viewName } = response
  console.log(viewName)
  if (viewName === 'user/login/confirm' || viewName === 'user/register') {
    throw new Error('验证码不正确');
  } else if (viewName === 'user/login') {
    throw new Error('登录失败，系统异常');
  } else if (viewName === 'err') {
    let msg = response.errMsg || '登录失败';
    throw new Error(msg);
  } else if (viewName === 'user/home') {
    let { loggedUser } = response
    wepy.setStorageSync('loggedUser', loggedUser)
    return '登录成功'
  }
  throw new Error('服务器数据错误');
}
//  * 验证服务器端有没有登录
export async function saveDialHistory(dialUserID, announceID) {
  let form = {
    from: 'weixin',
    announceID: announceID
  }
  let res = await wepy.request({
    url: 'https://https.ttyhuo.com/mvc/v3/save_dial_history_' + dialUserID,
    header: {
      'Authorization': 'aa0b780a5c242d26424c5f7dfd3c0294',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': getLocalCookieString()
    },
    data: form,
    method: 'GET'
  })
  let response = null
  try {
    response = res.data
    saveResponseCookie(res.header)
  } catch (e) {
    throw new Error('服务器数据错误');
  }
  if (response === 'success') {
    return { type: 'success', key: '' }
  } else if (response === 'not_login') {
    throw new Error(response.errMsg);
  }
  throw new Error('服务器数据错误');
}

export async function getUserInfo() {
  return {
    'userInfo': {
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

      'verified': true,
      'identity': 1,
      'identityStr': 'KOL',
      'regdays': 2,
      'location': 'sdsd',
      'locTimeStr': 'sdsd',
    },
    'payRecord': {
      'to_date': '2019-10-01',
      'addedDays': 10,
    },
    'userRefer': {
      'cnt': 11,
      'verifiedCnt': 4,
      'paidCnt': 2,
      'cashBackAmount': 40,
    }
  }
  /*
  let form = {
    from: 'weixin'
  }
  let res = await wepy.request({
    url: 'https://https.ttyhuo.com/mvc/v3/selectUserInfoForLengYun56',
    header: {
      'Authorization': 'aa0b780a5c242d26424c5f7dfd3c0294',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': getLocalCookieString()
    },
    data: form,
    method: 'GET'
  })
  let response = null
  try {
    response = res.data
    if(response.retcode !== 0){
      let error = new Error(response.msg)
      error.is_internal = true
      error.code = response.retcode
      throw error
    }
    saveResponseCookie(res.header)
    return response
  } catch (e) {
    if(e.is_internal){
      throw e
    }
    throw new Error('服务器数据错误');
  }
  */
}

export async function getUserRefer() {
  return [
    {
      'do_time': '2019-10-01',
      'userName': '张三',
      'accountNo': '16723446532',
      'verified': 1,
      'hasPaid': 1,
    },
    {
      'do_time': '2019-10-01',
      'userName': '李三',
      'accountNo': '16723446532',
      'verified': 1,
      'hasPaid': 0,
    },
    {
      'do_time': '2019-10-01',
      'userName': '王三',
      'accountNo': '16723446532',
      'verified': 1,
      'hasPaid': 1,
    },
    {
      'do_time': '2019-10-01',
      'userName': '赵三',
      'accountNo': '16723446532',
      'verified': 0,
      'hasPaid': 0,
    },
  ]
  /*
  let form = {
    from: 'weixin'
  }
  let res = await wepy.request({
    url: 'https://https.ttyhuo.com/mvc/v3/selectUserReferData',
    header: {
      'Authorization': 'aa0b780a5c242d26424c5f7dfd3c0294',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': getLocalCookieString()
    },
    data: form,
    method: 'GET'
  })
  let response = null
  try {
    response = res.data
    if(response.retcode !== 0){
      let error = new Error(response.msg)
      error.is_internal = true
      error.code = response.retcode
      throw error
    }
    saveResponseCookie(res.header)
    return response.data
  } catch (e) {
    if(e.is_internal){
      throw e
    }
    throw new Error('服务器数据错误');
  }
  */
}

export async function getLengYun56Data() {
  return {
    'totalCnt': 34555,
    'todayCnt': 34,
    'todayAnnounceCnt': 23456,
    'reportCnt': 453222,
  }

  /*
  let form = {
    from: 'weixin'
  }
  let res = await wepy.request({
    url: 'https://https.ttyhuo.com/mvc/v3/selectLengYun56Data',
    header: {
      'Authorization': 'aa0b780a5c242d26424c5f7dfd3c0294',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': getLocalCookieString()
    },
    data: form,
    method: 'GET'
  })
  let response = null
  try {
    response = res.data
    if(response.retcode !== 0){
      let error = new Error(response.msg)
      error.is_internal = true
      error.code = response.retcode
      throw error
    }
    saveResponseCookie(res.header)
    return response.data
  } catch (e) {
    if(e.is_internal){
      throw e
    }
    throw new Error('服务器数据错误');
  }
  */
}
