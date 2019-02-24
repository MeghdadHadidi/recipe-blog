const types = {
	GET_RECIPES: "recipes.fetchStart",
	GET_RECIPES_END: "recipes.fetchEnd",
	GET_RECIPES_SUCCESS: "recipes.fetchSuccess",
	GET_RECIPES_ERROR: "recipes.fetchError",
	GET_RECIPE_DETAIL: "recipe.detail.fetchStart",
	GET_RECIPE_DETAIL_END: "recipe.detail.fetchEnd",
	GET_RECIPE_DETAIL_SUCCESS: "recipe.detail.fetchSuccess",
	GET_RECIPE_DETAIL_ERROR: "recipe.detail.fetchError"
}

import {
	getRecipeItemsService,
	getRecipeDetailService
} from "../utils/serviceCaller"

export const getRecipeItems = params => {
	return dispatch => {
		dispatch({ type: types.GET_RECIPES })

		return getRecipeItemsService(params).then(({ data }) => {
			dispatch({ type: types.GET_RECIPES_END })

			if (data.success) {
				dispatch({
					type: types.GET_RECIPES_SUCCESS,
					payload: data.data
				})
			} else {
				dispatch({ type: types.GET_RECIPES_ERROR, payload: data.error })
			}
		})
	}
}

export const getRecipeDetail = params => {
	return dispatch => {
		dispatch({ type: types.GET_RECIPE_DETAIL })

		return getRecipeDetailService(params).then(({ data }) => {
			dispatch({ type: types.GET_RECIPE_DETAIL_END })

			if (data.success) {
				return dispatch({
					type: types.GET_RECIPE_DETAIL_SUCCESS,
					payload: data.data
				})
			} else {
				dispatch({
					type: types.GET_RECIPE_DETAIL_ERROR,
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
