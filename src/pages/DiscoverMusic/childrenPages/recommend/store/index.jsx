const initState = {
    topBanners:[],
    popularRecommend: [],
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
        default:
            return state
    }
}