const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    constructor(executor) {
        try {
            executor(this.resolve, this.reject)
        }   catch (error) {
            this.reject(error)
        }
    }

    status = PENDING
    value = null
    reason = null
    onFulfilledCBs = []
    onRejectedCBs = []

    resolve = (value) => {
        if (this.status === PENDING) {
            this.status = FULFILLED
            this.value = value
            while (this.onFulfilledCBs.length) {
                this.onFulfilledCBs.shift()(value)
            }
        }
    }

    reject = (reason) => {
        if (this.status === PENDING) {
            this.status = REJECTED
            this.reason = reason
            while (this.onRejectedCBs.length) {
                this.onRejectedCBs.shift()(reason)
            }
        }
    }

    then(onFulfilled, onRejected) {
        const realFulfilledCB = typeof onFulfilled === 'function' ? onFulfilled : (value) => value
        const realRejectedCB = typeof onRejected === 'function' ? onRejected : (reason) => { throw reason }

        const promise_ = new MyPromise((resolve, reject) => {
            const fulfilledMicroTask = () => {
                queueMicrotask(() => {
                    try {
                        const x = realFulfilledCB(this.value)
                        resolvePromise(promise_, x, resolve, reject)
                    }   catch (error) {
                        reject(error)
                    }
                })
            }

            const rejectedMicroTask = () => {
                queueMicrotask(() => {
                    try {
                        const x = realRejectedCB(this.reason)
                        resolvePromise(promise_, x, resolve, reject)
                    }   catch (error) {
                        reject(error)
                    }
                })
            }

            if (this.status === FULFILLED) {
                fulfilledMicroTask()
            }   else if (this.status === REJECTED) {
                rejectedMicroTask()
            }   else {
                this.onFulfilledCBs.push(fulfilledMicroTask)
                this.onRejectedCBs.push(rejectedMicroTask)
            }
        })

        return promise_
    }

    static resolve (parameter) {
        if (parameter instanceof MyPromise) {
            return parameter
        }

        return new MyPromise(resolve => {
            resolve(parameter)
        })
    }

    static reject (reason) {
        return new MyPromise ((_, reject) => {
            reject(reason)
        })
    }
}

function resolvePromise (promise, x, resolve, reject) {
    if (promise === x) {
        return reject(new TypeError('promise 调用自身'))
    }
    if (typeof x === 'object' || typeof x === 'function') {
        if (x === null) {
            return resolve(x)
        }

        let then
        try {
            then = x.then
        }   catch(error) {
            reject(error)
        }

        if (typeof then === 'function') {
            let called = false

            try {
                then.call(
                    x,
                    y => {
                        if (called) return
                        called = true
                        resolvePromise(promise, y, resolve, reject)
                    },
                    r => {
                        if (called) return
                        called = true
                        reject(r)
                    }
                )
            }   catch(error) {
                reject(error)
            }
        }   else {
            resolve(x)
        }
    }   else {
        return resolve(x)
    }
}

module.exports = MyPromise