import {
    generateEndTypeName,
    generateStartTypeName,
    generateErrorTypeName,
    generateSuccessTypeName
} from "../utils/asyncActionNameGenerator"

import { GET_MENU_ITEMS } from "./types"

import { getMenuItemsService } from "./serviceCaller"

export const getMenuItems = () => {
    return dispatch => {
        dispatch({
            type: generateStartTypeName(GET_MENU_ITEMS)
        })

        return getMenuItemsService().then(({ data }) => {
            dispatch({
                type: generateEndTypeName(GET_MENU_ITEMS)
            })

            if (data.success) {
                dispatch({
                    type: generateSuccessTypeName(GET_MENU_ITEMS),
                    payload: data.data
                })
            } else {
                dispatch({
                    type: generateErrorTypeName(GET_MENU_ITEMS),
                    payload: data.error
                })
            }
        })
    }
}
