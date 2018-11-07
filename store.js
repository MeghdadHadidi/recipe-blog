import { applyMiddleware, createStore, compose } from "redux"
import thunk from "redux-thunk"
import asyncActionsMiddleware from "./middleware/asyncActionsMiddleware"
import rootReducer from "./reducers"

const enhancers = []
const middlewares = [thunk, asyncActionsMiddleware]

const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
)

const configureStore = (initialState, options) => {
    return createStore(rootReducer, initialState, composedEnhancers)
}

export default configureStore
