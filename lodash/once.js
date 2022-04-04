function once (fn) {
    let result
    let revoked = false

    return (...args) => {
        if (revoked)    return result
        result = fn(...args)
        revoked = true
        return result
    }
}

const f = () => {
    console.log('test')
    return 1
}

let test = once(f)