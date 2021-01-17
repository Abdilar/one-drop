import {combineReducers} from "redux";

import GeneralReducer from "./general.reducer";
import LayoutReducer from "./layout.reducer";

export default combineReducers({
    general: GeneralReducer,
    layout: LayoutReducer
});
