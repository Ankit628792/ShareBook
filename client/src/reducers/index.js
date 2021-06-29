
import { combineReducers } from "redux";
import bookmarkReducer from "./bookmarkReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    bookmarkReducer,
    userReducer
})

export default rootReducer