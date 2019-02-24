import axios from "axios"

const instance = axios.create({
	baseURL: "https://www.mocky.io/v2",
	headers: {
		"Content-Type": "application/json;charset=UTF-8"
	}
})

export const getMenuItemsService = params =>
	instance.get("/5be3eb792f00006800d9f227", { params })

export const getRecipeItemsService = params =>
	instance.get("/5c7050aa38000054003fcc1f", { params })

export const getVideosService = params =>
	instance.get("/5c7050f838000052003fcc21", { params })

export const getRecipeDetailService = params =>
	instance.get("/5c7050463800002c003fcc1c", { params })

export const getRecipesByCategoryService = params =>
	instance.get("/5c71800f3500006000e9e854", { params })
