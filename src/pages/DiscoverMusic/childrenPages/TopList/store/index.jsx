const initState = {
    allTopList: [],
    topListID: 19723756,
    topListTitleInfo: {},
    topListDetail: []
}

export default function reducer (state = initState, action){
    // 深拷贝
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "GET_ALL_TOPLIST":
            newState.allTopList = action.allTopList
            return newState
        case "CHANGE_TOPLIST_ID":
            newState.topListID = action.topListID
            return newState
        case "CHANGE_TOPLIST_DETAIL":
            newState.topListDetail = action.topListDetail
            newState.topListTitleInfo = action.topListTitleInfo
            return newState
        default:
            return state    
    }
}