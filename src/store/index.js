import { fetchReducer } from "../reducers/fetchReducer"
import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"


let rootReducer = combineReducers({
    data: fetchReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))