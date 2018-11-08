import {
    generateEndTypeName,
    generateErrorTypeName,
    generateStartTypeName,
    generateSuccessTypeName
} from "../utils/asyncActionNameGenerator"

import { GET_VIDEOS } from "../actions/types"

const initialState = {
    items: [],
    fetched: false,
    fetching: false,
    error: null
}

export default function videos(state = initialState, action = {}) {
    switch (action.type) {
        case generateStartTypeName(GET_VIDEOS):
            return {
                ...state,
                fetched: false,
                fetching: true
            }
        case generateEndTypeName(GET_VIDEOS):
            return {
                ...state,
                fetching: false
            }
        case generateErrorTypeName(GET_VIDEOS):
            return {
                ...state,
                error: action.payload
            }
        case generateSuccessTypeName(GET_VIDEOS):
            return {
                ...state,
                fetched: true,
                items: action.payload
            }
        default:
            return state
    }
}
