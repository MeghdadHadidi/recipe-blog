export const generateStartTypeName = actionName => {
    return `${actionName}_START`
}

export const generateEndTypeName = actionName => {
    return `${actionName}_END`
}

export const generateErrorTypeName = actionName => {
    return `${actionName}_ERROR`
}

export const generateSuccessTypeName = actionName => {
    return `${actionName}_SUCCESS`
}
