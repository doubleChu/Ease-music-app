import { combineReducers } from "redux";

import recommendReducer from '../pages/DiscoverMusic/childrenPages/recommend/store'

const reducer = combineReducers({
    recommendReducer: recommendReducer,
})

export default reducer