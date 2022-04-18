import request from './request'

export const getTopListDetail = (id) =>
  request({
    url: "/playlist/detail",
    params: {
      id,
    },
  })

export const getAllTopList = () => request({ url: "/toplist" })