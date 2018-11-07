const asyncActionsMiddleware = store => next => action => {
    const isActionAsync = action.hasOwnProperty("async")

    if (!isActionAsync) {
        next(action)
    } else {
        const { httpMethodToInvoke, params, type } = action
        const inProgressType = generateInProgressTypeName(type)

        Promise.resolve(1).then(() => store.dispatch({ type: inProgressType }))
        httpMethodToInvoke(...params)
            .then(result => {
                const successType = generateSuccessTypeName(type)
                Promise.resolve(1).then(() =>
                    store.dispatch({
                        type: successType,
                        ...result
                    })
                )
            })
            .catch(err => {
                console.log("Middleware -> HttpMethodCall -> ", err)
                const errType = generateErrorTypeName(type)
                Promise.resolve(1).then(() =>
                    store.dispatch({ type: errType, err })
                )
            })

        return next(action)
    }
}

const generateInProgressTypeName = actionName => {
    return `${actionName}_INP_ROGRESS`
}

const generateErrorTypeName = actionName => {
    return `${actionName}_ERROR`
}

const generateSuccessTypeName = actionName => {
    return `${actionName}_SUCCESS`
}

export default {
    generateErrorTypeName,
    generateInProgressTypeName,
    generateSuccessTypeName,
    asyncActionsMiddleware
}
