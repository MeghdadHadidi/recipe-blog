import {
    generateEndTypeName,
    generateErrorTypeName,
    generateStartTypeName,
    generateSuccessTypeName
} from "../utils/asyncActionNameGenerator"

import { GET_RECIPES } from "../actions/types"

const initialState = {
    items: [],
    fetched: false,
    fetching: false,
    error: null
}

export default function recipe(state = initialState, action = {}) {
    switch (action.type) {
        case generateStartTypeName(GET_RECIPES):
            return {
                ...state,
                fetched: false,
                fetching: true
            }
        case generateEndTypeName(GET_RECIPES):
            return {
                ...state,
                fetching: false
            }
        case generateErrorTypeName(GET_RECIPES):
            return {
                ...state,
                error: action.payload
            }
        case generateSuccessTypeName(GET_RECIPES):
            return {
                ...state,
                fetched: true,
                items: action.payload
            }
        default:
            return state
    }
}
