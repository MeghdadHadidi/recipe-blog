import { GET_MENU_ITEMS } from "../actions/types"

import {
    generateSuccessTypeName,
    generateErrorTypeName,
    generateEndTypeName,
    generateStartTypeName
} from "../utils/asyncActionNameGenerator"

const initialState = {
    fetching: false,
    fetched: false,
    items: [],
    error: null
}

export default function menus(state = initialState, action = {}) {
    switch (action.type) {
        case generateStartTypeName(GET_MENU_ITEMS):
            return {
                ...state,
                fetching: true
            }
        case generateEndTypeName(GET_MENU_ITEMS):
            return {
                ...state,
                fetching: false
            }
        case generateErrorTypeName(GET_MENU_ITEMS):
            return {
                ...state,
                fetched: false,
                error: action.payload
            }
        case generateSuccessTypeName(GET_MENU_ITEMS):
            return {
                ...state,
                fetched: true,
                items: action.payload
            }
        default:
            return state
    }
}
