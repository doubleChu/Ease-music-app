import request from "./request"

export const getSongDetail = (ids) =>
  request({
    url: "/song/detail",
    params: {
      ids,
    },
  })

export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id,
    },
  })
}

export function getHotComment(id, type = 0) {
    return request({
      url: "/comment/hot",
      params: {
        id,
        type,
      },
    });
  }