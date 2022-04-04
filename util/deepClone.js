function deepClone (obj) {
    let result

    if (typeof obj === 'object') {
        result = obj.constructor === Array ? [] : {}

        for (let key in obj) {
            result[key] = typeof obj[key] == 'object' ? deepClone(obj[key]) : obj[key] 
        }
    }   else {
        result = obj
    }

    return result
}