import { combineReducers } from "redux"

// Reducers
import menus from "./menus"
import recipes from "./recipes"
import videos from "./videos"

export default combineReducers({ menus, recipes, videos })
