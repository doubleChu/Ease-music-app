const initState = {
    topBanners:[],
    popularRecommend: [],
    newestAlbum: [],
    settledSinger: [],
    popularDj: [],
}

export default function reducer (state = initState, action){
    // 深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "CHANGE_TOP_BANNER":
            newState.topBanners = action.topBanners
            return newState
        case "CHANGE_POPULAR_RECOMMEND":
            newState.popularRecommend = action.popularRecommend
            return newState
        case "CHANGE_NEWEST_ALBUM":
            newState.newestAlbum = action.newestAlbum
            return newState   
        case "CHANGE_SETTLED_SINGER":
            newState.settledSinger = action.settledSinger
            return newState
        case "CHANGE_POPULAR_DJ":
            newState.popularDj = action.popularDj
            return newState
        default:
            return state    
    }
}