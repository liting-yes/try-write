if (!Function.prototype.call) {
    Function.prototype.call = function (ctx = globalThis) {
        const args = Array.from(arguments).slice(1)
        const key = Symbol('key')
        ctx[key] = this
        const res = ctx[key](...args)
        delete ctx[key]

        return res
    }
}