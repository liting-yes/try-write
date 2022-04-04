function asyncGeneratorStep (gen, resolve, reject, _next, _throw, key, arg) {
    try {
        let info = gen[key](arg)
        let value = info.value
    }   catch (error) {
        reject(error)
        return
    }

    if (info.done) {
        resolve(value)
    }   else {
        Promise.resolve(value).then(_next, _throw)
    }
}

export default function _asyncToGenerator (fn) {
    return function () {
        let self = this, args =arguments

        return new Promise ((resolve, reject) => {
            let gen = fn.apply(self, args)

            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value)
            }

            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err)
            }

            _next(undefined)
        })
    }
}