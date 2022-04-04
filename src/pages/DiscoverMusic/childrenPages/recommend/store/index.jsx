const initState = {
    topBanners:[],
}

export default function reducer (state = initState, action){
    // 深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "CHANGE_TOP_BANNER":
            newState.topBanners = action.topBanners
            return newState
        default:
            return state
    }
}