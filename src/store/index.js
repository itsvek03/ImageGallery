import { fetchReducer, globalReducer } from "../reducers/fetchReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
	data: fetchReducer,
	globalData: globalReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
