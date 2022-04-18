const initState = {
    topBanners:[],
    popularRecommend: [],
    newestAlbum: [],
    settledSinger: [],
    popularDj: [],
    topListDetail0: {},
    topListDetail1: {},
    topListDetail2: {},
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
        case "CHANGE_TOP_LIST_DETAIL":
            newState.topListDetail0 = action.topListDetail0
            newState.topListDetail1 = action.topListDetail1
            newState.topListDetail2 = action.topListDetail2
            return newState
        default:
            return state    
    }
}