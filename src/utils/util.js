function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth()+ 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second =date.getSeconds()
    return [year, monte, day].map(formatNumber).join('/')+'' +[hour,minute,second].map(formatNumber).join(":")
}
const formatDate = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return [year,month,day].map(formatNumber).join('-')
}

const calcTimeHeader = () => {
    let date = new Date(),
      year = date.getUTCFullYear(),
      month = date.getUTCMonth(),
      day = date.getDate(),
      hour = date.getHours(),
      minute = date.getUTCMinutes()
    // 获取当前时间
    let currentDate = new Date(),
      currentYear = date.getUTCFullYear(),
      currentMonth = date.getUTCMonth(),
      currentDay = currentDate.getDate()
    // 计算是否是同一天
    if (currentYear == year && currentMonth == month && currentDay == day) {//同一天直接返回
      if (hour > 12) {
        return `下午 ${hour}:${minute < 10 ? '0' + minute : minute}`
      } else {
        return `上午 ${hour}:${minute < 10 ? '0' + minute : minute}`
      }
    }
    // 计算是否是昨天
    let yesterday = new Date(currentDate - 24 * 3600 * 1000)
    if (year == yesterday.getUTCFullYear() && month == yesterday.getUTCMonth && day == yesterday.getDate()) {//昨天
      return `昨天 ${hour}:${minute < 10 ? '0' + minute : minute}`
    } else {
      return `${year}-${month + 1}-${day} ${hour}:${minute < 10 ? '0' + minute : minute}`
    }
  }
 
module.exports = {
    calcTimeHeader: calcTimeHeader,
    formatTime: formatTime,
    formatDate: formatDate
}