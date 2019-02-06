import axios from "axios"

const instance = axios.create({
    baseURL: "http://bejooi.ir/api/v1",
    headers: {
        "Content-Type": "application/json;charset=UTF-8"
    }
})

export const getMenuItemsService = params =>
    instance.get("/menus?id=1", { params })

export const getRecipeItemsService = params =>
    instance.get("/5be417132f00005c00d9f319", { params })

export const getVideosService = params =>
    instance.get("/5be442002f00008f00d9f442", { params })
