import { GET_MENU_ITEMS_START, GET_MENU_ITEMS_END, GET_MENU_ITEMS_ERROR, SET_MENU_ITEMS } from './types'
import axios from 'axios'

const instance = axios.create({
    baseURL: "http://www.mocky.io/v2",
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

export const getMenuItems = () => {
    return dispatch => {
        dispatch({
            type: GET_MENU_ITEMS_START
        })

        return instance.get('/5be16d2d3000008100d9a971').then(({ data }) => {
            dispatch({
                type: GET_MENU_ITEMS_END
            })

            if(data.success){
                dispatch({
                    type: SET_MENU_ITEMS,
                    payload: data.data
                })
            }
            else{
                dispatch({
                    type: GET_MENU_ITEMS_ERROR,
                    payload: data.error
                })
            }
        })
    }
}