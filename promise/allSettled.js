function allSettled (promises) {
    if (promises.length === 0)
        return Promise.resolve([])
    
    const promises_ = promises.map(
        item => item instanceof Promise ? item : Promise.resolve(item)
    )

    return new Promise((resolve, reject) => {
        const result = []
        let unSettled = promises_.length

        promises_.forEach((promise, index) => {
            promise.then(
                (value) => {
                    result[index] = {
                        status: 'fulfilled',
                        value
                    }

                    if (--unSettled === 0)
                        resolve(result)
                },
                (reason) => {
                    result[index] = {
                        status: 'rejected',
                        reason
                    }

                    if (--unSettled === 0)
                        resolve(result)
                }
            )
        })
    })
}