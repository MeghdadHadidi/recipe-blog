import { GET_MENU_ITEMS_START, GET_MENU_ITEMS_END, GET_MENU_ITEMS_ERROR, SET_MENU_ITEMS } from '../actions/types'

const initialState = {
    fetching: false,
    fetched: false,
    items: [],
    error: ''
}

export default function menus(state = initialState, action = {}){
    switch (action.type) {
        case GET_MENU_ITEMS_START:
            return {
                ...state,
                fetching: true
            }
        case GET_MENU_ITEMS_END:
            return {
                ...state,
                fetching: false
            }
        case GET_MENU_ITEMS_ERROR:
            return {
                ...state,
                fetched: false,
                error: action.payload
            }
        case SET_MENU_ITEMS:
            return {
                ...state,
                fetched: true,
                items: action.payload
            }    
        default:
            return state;
    }

    return state
}