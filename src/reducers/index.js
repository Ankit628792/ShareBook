
import { combineReducers } from "redux";
import bookmarkReducer from "./bookmarkReducer";
import setUser from "./setUser";

const rootReducer = combineReducers({
    bookmarkReducer,
    setUser
})

export default rootReducer