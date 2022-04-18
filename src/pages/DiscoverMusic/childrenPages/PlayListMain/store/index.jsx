const initState = {
    playListPerPage: [],
}

export default function reducer (state = initState, action){
    // 深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "GET_PLAYLIST_PER_PAGE":
            newState.playListPerPage = action.playListPerPage
            return newState
        default:
            return state    
    }
}