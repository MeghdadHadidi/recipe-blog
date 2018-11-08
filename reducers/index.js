import { combineReducers } from "redux"

// Reducers
import menus from "./menus"
import recipes from "./recipes"

export default combineReducers({ menus, recipes })
