
import qs from 'querystring'
import wepy from 'wepy'

export function getPage(routeName) {
  try {
    let p = getCurrentPages().filter(function (page) {
      return page.route === routeName
    })[0]
    return p
  } catch (e) {
    return null
  }
}

export class RouteHelper {
  static getExpressListPage() {
    return getPage('pages/express_area')
  }

  static navigateTo(route, params) {
    wepy.navigateTo({
      url: route + '?=' + qs.stringify(params)
    })
  }

  static getPage(page_name) {
    return getPage('pages/' + page_name)
  }
}
