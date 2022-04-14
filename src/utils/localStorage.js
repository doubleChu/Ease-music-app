/**
 * 本地存储添加歌曲id,如果存在就不再添加
 * @param {Number} id 歌曲id
 * @param {String} key 本地存储key
 */
export function addPlaylistID(id, key = "playlistID") {
  const songListID = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : []
  if (id instanceof Array) {
    id.forEach((id) => {
      !songListID.includes(id) && songListID.push(id)
    })
  } else if (typeof id === "number") {
    // 本地存储保存包括不再重复添加
    if (!songListID.includes(id)) songListID.push(id)
  } else {
    throw Error("id只能是数字或者数组类型")
  }
  localStorage.setItem(key, JSON.stringify(songListID))
}

/**
 * 获取歌曲列表id
 * @param {String} key
 * @returns {Array} 歌曲列表项id
 */
export function getPlaylistID(key = "playlistID") {
  const songListID = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : []
  return songListID
}

/**
 * 删除的歌曲ID
 * @param {Number or String} id 要删除的歌曲ID
 * @param {String} key
 */
export function removeSongID(id, key = "playlistID") {
    localStorage.setItem(key, localStorage.getItem(key).replace(id + ',',''))
}

/**
 * 清除全部歌曲
 * @param {String} key
 */
export function removeAllSong(key = "playlistID") {
  localStorage.removeItem(key)
}

/**
 * 重置本次存储歌曲列表ID
 * @param {Array} idArr 新歌曲列表数组
 */
export function resetPlaylistID(idArr) {
  removeAllSong()
  idArr && idArr.forEach((id) => addPlaylistID(id))
}
