import {
	generateEndTypeName,
	generateErrorTypeName,
	generateStartTypeName,
	generateSuccessTypeName
} from "../utils/asyncActionNameGenerator"

import { GET_RECIPES, GET_RECIPES_BY_CATEGORY } from "../actions/types"

const initialState = {
	items: [],
	categories: {},
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
			let category = state.categories[action.payload.category]

			category.items = [...category.items, action.payload.items]
			return {
				...state,
				fetched: true,
				categories: [...state.categories]
			}

		default:
			return state
	}
}
