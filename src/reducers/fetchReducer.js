import { FETCH_IMAGES } from "../actions/types"
let initialState = []

export function fetchReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_IMAGES:
            return action.payload
        default: return state
    }
}