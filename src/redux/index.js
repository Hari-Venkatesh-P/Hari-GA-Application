import { combineReducers , createStore} from "redux";
import {profileReducer} from "./reducers/profileReducers";

const rootReducer = combineReducers({
    profileReducer,
});

const store = createStore(rootReducer);

export default store;