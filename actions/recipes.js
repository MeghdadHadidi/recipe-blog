import {
    generateEndTypeName,
    generateStartTypeName,
    generateErrorTypeName,
    generateSuccessTypeName
} from "../utils/asyncActionNameGenerator"

import { GET_RECIPES } from "./types"

import { getRecipeItemsService } from "./serviceCaller"

export const getRecipeItems = params => {
    return dispatch => {
        dispatch({
            type: generateStartTypeName(GET_RECIPES)
        })

        return getRecipeItemsService().then(({ data }) => {
            dispatch({
                type: generateEndTypeName(GET_RECIPES)
            })

            if (data.success) {
                dispatch({
                    type: generateSuccessTypeName(GET_RECIPES),
                    payload: data.data
                })
            } else {
                dispatch({
                    type: generateErrorTypeName(GET_RECIPES),
                    payload: data.error
                })
            }
        })
    }
}
