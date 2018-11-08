import axios from "axios"

const instance = axios.create({
    baseURL: "http://www.mocky.io/v2",
    headers: {
        "Content-Type": "application/json;charset=UTF-8"
    }
})

export const getMenuItemsService = params =>
    instance.get("/5be3eb792f00006800d9f227", { params })

export const getRecipeItemsService = params =>
    instance.get("/5be417132f00005c00d9f319", { params })