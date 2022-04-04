Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(
            p => {
                Promise.resolve(p).then(
                    value => resolve(value),
                    reason => reject(reason)
                )
            }
        )
    })
}
