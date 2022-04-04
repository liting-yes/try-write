const delay = (fn, t, ...args) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Promise.resolve(fn(...args))
                .then(resolve)
                .catch(reject)
        }, t)
    })
}
