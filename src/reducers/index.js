import { combineReducers } from "redux";

import movies from "./_movies";
import favorites from "./_favorites";

export default combineReducers({
    movies,
    favorites,
});