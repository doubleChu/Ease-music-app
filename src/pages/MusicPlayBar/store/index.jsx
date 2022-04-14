const initState = {
    songDetail: {},
    lyricList: [],
    lyricIndex: 0,
    hotComment: [],
    playList: [],
    playListCount: 0,
}

export default function reducer (state = initState, action){
    // 深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
      case "GET_SONG_DETAIL":
        newState.songDetail = action.songDetail
        return newState
      case "GET_LYRIC":
        newState.lyricList = action.lyricList
        return newState
      case "GET_HOT_COMMENT":
        newState.hotComment = action.hotComment
        return newState
      case "GET_PLAY_LIST":
        newState.playList = action.playList
        return newState
      case "GET_PLAY_LIST_COUNT":
        newState.playListCount = action.playListCount
        return newState
      case "GET_LYRIC_INDEX":
        newState.lyricIndex = action.lyricIndex
        return newState
      default:
        return state
    }
}