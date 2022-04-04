if (!Function.prototype.aplly) {
    Function.prototype.apply = function (ctx = globalThis) {
        const args = arguments
        const key = Symbol('key')
        ctx[key] = this
        const res = ctx[key](...args)
        delete ctx[key]

        return res
    }
}