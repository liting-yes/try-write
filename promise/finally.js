Promise.prototype.finally = function (cb) {
    return this.then(
        (value) => {
            return Promise.resolve(cb()).then(() => value)
        },
        (reason) => {
            return Promise.resolve(cb()).then(() => { throw reason })
        }
    )
}
