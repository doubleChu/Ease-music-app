import { combineReducers } from "redux";

import recommendReducer from '../pages/DiscoverMusic/childrenPages/recommend/store'

const reducer = combineReducers({
    recommend: recommendReducer,
})

export default reducer