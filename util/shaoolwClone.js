function shallowClone(obj) {
    let cloneObj = {}

    for (let key in obj) {
        cloneObj[key] = obj[key]
    }

    return cloneObj
}