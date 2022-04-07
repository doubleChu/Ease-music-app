import request from "./request"

//轮播图
export const getBanners = () => request({ url: "/banner" })
//热门推荐
export const getPopularRecom = (limit) =>
  request({
    url: "/personalized",
    params: {
      limit,
    },
  })

  export const getNewestAlbum = () => request({ url: "/album/newest" })

  export const getSingerList = (limit, type, area) =>
  request({
    url: "/artist/list",
    params: {
      limit,
      type,
      area,
    },
  })

  export const getPopularDj = (limit) =>
  request({
    url: "/dj/hot",
    params: {
      limit,
    },
  })