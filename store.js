import { applyMiddleware, createStore, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers"

const enhancers = []
const middleware = [thunk]
const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          })
        : compose

const composedEnhancers = composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers
)

const configureStore = (initialState, options) => {
    return createStore(rootReducer, initialState, composedEnhancers)
}

export default configureStore
