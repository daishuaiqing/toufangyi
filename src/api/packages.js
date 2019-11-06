


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
 
export async function searchAnnounce(option) {

  option = Object.assign({}, defaultOption, option)

  let announces = [
    {
      "announceID": 4434344,

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

      "platformStr": "",
      "platformId": -1,
      "fansNumStr": "5w+",
      "fansNumBegin": 50000,

      "paymentStr": "6~8k",
      "tags":[
        "颜值高",
        "报价合理",
        "不拖稿"
      ],

      "addr": "江苏 无锡 惠山区 风能路65号宝湾中心2209室",
      "city": "",

      "description": "1、推广时间在9月或者10月初\n2、颜值高的小姐姐优先，笔记需要收录\n3、粉丝要求5w以上，请合理报价，天价不选\n4、http://ojiysd85z9xs9nkw.mikecrm.com/7J8nTmE\n5、拖稿的小姐姐就不要来了",

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

      "title": "日本Ceruru.b身体乳日本Ceruru.b身体乳",
      "keyword": "Ceruru",

      "platformStr": "小红书",
      "platformId": -1,
      "fansNumStr": "5w+",
      "fansNumBegin": 50000,

      "paymentStr": "6~8k",
      "tags":[
        "颜值高",
        "报价合理",
        "不拖稿"
      ],

      "addr": "风能路65号宝湾中心2209室",
      "city": "江苏 无锡 惠山区",

      "description": "1、推广时间在9月或者10月初\n2、颜值高的小姐姐优先，笔记需要收录\n3、粉丝要求5w以上，请合理报价，天价不选\n4、http://ojiysd85z9xs9nkw.mikecrm.com/7J8nTmE\n5、拖稿的小姐姐就不要来了",

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

      "title": "日本Ceruru.b身体乳日本Ceruru.b身体乳",
      "keyword": "Ceruru",

      "platformStr": "小红书",
      "platformId": -1,
      "fansNumStr": "5w+",
      "fansNumBegin": 50000,

      "paymentStr": "6~8k",
      "tags":[
        "颜值高",
        "报价合理",
        "不拖稿"
      ],

      "addr": "风能路65号宝湾中心2209室",
      "city": "",

      "description": "1、推广时间在9月或者10月初\n2、颜值高的小姐姐优先，笔记需要收录\n3、粉丝要求5w以上，请合理报价，天价不选\n4、http://ojiysd85z9xs9nkw.mikecrm.com/7J8nTmE\n5、拖稿的小姐姐就不要来了",

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

      "title": "日本Ceruru.b身体乳日本Ceruru.b身体乳",
      "keyword": "Ceruru",

      "platformStr": "",
      "platformId": -1,
      "fansNumStr": "5w+",
      "fansNumBegin": 50000,

      "paymentStr": "6~8k",
      "tags":[
        "颜值高",
        "报价合理",
        "不拖稿"
      ],

      "addr": "",
      "city": "",

      "description": "1、推广时间在9月或者10月初\n2、颜值高的小姐姐优先，笔记需要收录\n3、粉丝要求5w以上，请合理报价，天价不选\n4、http://ojiysd85z9xs9nkw.mikecrm.com/7J8nTmE\n5、拖稿的小姐姐就不要来了",

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
    }
  ]
  // 拼接额外信息
  if (Array.isArray(announces) && announces.length > 0) {
    announces.forEach(setExtraData)
  }
  if (announces) {
    return announces
  }
}

export async function announceDetail(announceId) {
  let detail = {
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

        "title": "日本Ceruru.b身体乳日本Ceruru.b身体乳",
        "keyword": "Ceruru",

        "platformStr": "小红书",
        "platformId": -1,
        "fansNumStr": "5w+",
        "fansNumBegin": 50000,

        "paymentStr": "6~8k",
        "tags":[
          "颜值高",
          "报价合理",
          "不拖稿"
        ],

        "addr": "风能路65号宝湾中心2209室",
        "city": "",

        "description": "1、推广时间在9月或者10月初\n2、颜值高的小姐姐优先，笔记需要收录\n3、粉丝要求5w以上，请合理报价，天价不选\n4、http://ojiysd85z9xs9nkw.mikecrm.com/7J8nTmE\n5、拖稿的小姐姐就不要来了",

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
      }
  setExtraData(detail)
  return detail
}

// 给货源设置额外信息，因为到渲染里面不能用方法调用逻辑，所以额外信息全部都先生成好，再直接显示
function setExtraData(announce) {

  if (announce.owner && announce.owner.faceImgUrl && announce.owner.faceImgUrl.indexOf('upaiyun.com') > -1) {
    if (!new RegExp('small$').test(announce.owner.faceImgUrl)) {
      announce.owner.faceImgUrl = announce.owner.faceImgUrl + '!small'
    }
  }

  if (announce.owner) {
    if (!announce.owner.faceImgUrl) {
      announce.owner.faceImgUrl = 'http://ttyhuo.cn/hppic/lengyun56.jpg'
    }
  }

  let extras = {}
  extras.city = announce.city.split(' ').pop()
  let citySegments = announce.city.split(' ')
  extras.citySeg = citySegments.pop()
  extras.citySub = citySegments.pop()
  // 货物介绍

  let announce_info = ''
  if (announce.keyword) {
    announce_info = '(' + announce.keyword + ')'
  }
  extras.announce_info = announce_info

  announce.extras = extras
}
