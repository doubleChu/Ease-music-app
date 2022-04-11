/**
 * 对数字进行格式化
 * @param {number} count
 */
export function setCountFormat(count) {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万"
  } else {
    return Math.floor(count / 10000000) / 10 + "亿"
  }
}

export function setImageSize(imgUrl, size) {
  return `${imgUrl}?param=${size}x${size}`
}

export function formatDate(time, format) {
  let date = new Date(time)
  let timeType = {
    MM: fillZero(date.getMonth() + 1),
    dd: fillZero(date.getDate()),
    hh: fillZero(date.getHours()),
    mm: fillZero(date.getMinutes()),
    ss: fillZero(date.getSeconds()),
  }
  for (let type in timeType) {
    format = format.replace(type, timeType[type])
  }
  return format
}

function fillZero(number) {
  if (number === 0) return "00"
  else if (Math.floor(number / 10) === 0) return "0" + String(number)
  else return String(number)
}

export function formatMonthDay(time) {
  return formatDate(time, "MM月dd日")
}

export function formatMinuteSecond(time) {
  return formatDate(time, "mm:ss")
}

export function getMusicUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}
