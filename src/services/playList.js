import request from './request'

export const getSelectedPlayList = (cat="全部", limit, offset=0) =>
  request({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset,
    },
  })