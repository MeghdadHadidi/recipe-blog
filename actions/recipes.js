import {
	generateEndTypeName,
	generateStartTypeName,
	generateErrorTypeName,
	generateSuccessTypeName
} from "../utils/asyncActionNameGenerator"

import { GET_RECIPES, GET_RECIPE_DETAIL } from "./types"

import { getRecipeItemsService, getRecipeDetailService } from "./serviceCaller"

export const getRecipeItems = params => {
	return dispatch => {
		dispatch({
			type: generateStartTypeName(GET_RECIPES)
		})

		return getRecipeItemsService(params).then(({ data }) => {
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

export const getRecipeDetail = params => {
	return dispatch => {
		dispatch({
			type: generateStartTypeName(GET_RECIPE_DETAIL)
		})

		return getRecipeDetailService(params).then(({ data }) => {
			dispatch({ type: generateEndTypeName(GET_RECIPE_DETAIL) })

			if (data.success) {
				return dispatch({
					type: generateSuccessTypeName(GET_RECIPE_DETAIL),
					payload: data.data
				})
			} else {
				dispatch({
					type: generateErrorTypeName(GET_RECIPE_DETAIL),
					payload: data.error
				})
			}
		})
	}
}

export const getRecipesByCategory = category => {
	return dispatch => {
		dispatch({
			type: generateStartTypeName(GET_RECIPES_BY_CATEGORY)
		})

		return getRecipeDetailService(category).then(({ data }) => {
			dispatch({ type: generateEndTypeName(GET_RECIPES_BY_CATEGORY) })

			if (data.success) {
				dispatch({
					type: generateSuccessTypeName(GET_RECIPES),
					payload: data.data
				})

				return dispatch({
					type: "GET_RECIPES_BY_CATEGORY",
					payload: category
				})
			} else {
				dispatch({
					type: generateErrorTypeName(GET_RECIPES_BY_CATEGORY),
					payload: data.error
				})
			}
		})
	}
}
