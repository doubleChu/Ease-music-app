const initState = {
    songDetail: {},
    lyricList: [],
    hotComment: [],
}

export default function reducer (state = initState, action){
    // 深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "GET_SONG_DETAIL":
            newState.songDetail = action.songDetail
            return newState
        case "GET_LYRIC":
            newState.lyricList = action.lyricList
            return newState
        case "GET_HOT_COMMENT":
            newState.hotComment = action.hotComment
            return newState
        default:
            return state    
    }
}