import { combineReducers } from "redux";

import recommendReducer from '../pages/DiscoverMusic/childrenPages/Recommend/store'
import playBarReducer from '../pages/MusicPlayBar/store'
import topListReducer from '../pages/DiscoverMusic/childrenPages/TopList/store'

const reducer = combineReducers({
    recommendReducer: recommendReducer,
    playBarReducer: playBarReducer,
    topListReducer: topListReducer,
})

export default reducer