// https://gist.github.com/andjosh/6764939
export function scrollTo(element, to, duration) {
  const start = element.scrollTop
  let change = to - start,
    currentTime = 0,
    increment = 20

  const animateScroll = function () {
    currentTime += increment
    const val = Math.easeInOutQuad(currentTime, start, change, duration)
    element.scrollTop = val
    if (currentTime < duration) {
      setTimeout(animateScroll, increment)
    }
  }
  animateScroll()
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t + b
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}
