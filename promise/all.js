function PromiseAll (promises) {
    return new Promise((resolve, reject) => {
        // 只考虑到 promises 为数组的情况，实际上 promises 可以为任何 es6 的 iterable 类型
        if (!Array.isArray(promises))
            throw new TypeError('promises must be an array')
        
        let result = []
        let count = 0
        promises.forEach((promise, index) => {
            // 只考虑到 promise 为 Promise 实例
            promise.then(
                (res) => {
                    result[index] = res
                    count++
                    count === promises.length && resolve(result)
                },
                (err) => {
                    reject(err)
                }
            )
        })
    })
}

module.exports = PromiseAll
