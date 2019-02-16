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
	instance.get("/5c6866a03800000e1db101a5", { params })

export const getVideosService = params =>
	instance.get("/5be442002f00008f00d9f442", { params })
