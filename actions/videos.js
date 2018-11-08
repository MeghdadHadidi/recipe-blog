import {
    generateEndTypeName,
    generateErrorTypeName,
    generateStartTypeName,
    generateSuccessTypeName
} from "../utils/asyncActionNameGenerator"

import { GET_VIDEOS } from "./types"

// Service Caller
import { getVideosService } from "./serviceCaller"

export const getVideos = params => {
    return dispatch => {
        dispatch({
            type: generateStartTypeName(GET_VIDEOS)
        })

        return getVideosService().then(({ data }) => {
            dispatch({
                type: generateEndTypeName(GET_VIDEOS)
            })

            if (data.success) {
                return dispatch({
                    type: generateSuccessTypeName(GET_VIDEOS),
                    payload: data.data
                })
            }

            dispatch({
                type: generateErrorTypeName(GET_VIDEOS),
                payload: data.data
            })
        })
    }
}
