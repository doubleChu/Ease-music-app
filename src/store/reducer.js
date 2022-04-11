import { combineReducers } from "redux";

import recommendReducer from '../pages/DiscoverMusic/childrenPages/recommend/store'
import playBarReducer from '../pages/MusicPlayBar/store'

const reducer = combineReducers({
    recommendReducer: recommendReducer,
    playBarReducer: playBarReducer,
})

export default reducer