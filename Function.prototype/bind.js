if (!Function.prototype.bind) {
    Function.prototype.bind = function (ctx = globalThis) {
        const fn = this
        const args = Array.from(arguments).slice(1)

        function bound () {
            if (!this || this === globalThis) {
                fn.apply(ctx, args)
            }   else {
                fn.apply(this, args)
            }
        }

        bound.prototype = fn.prototype

        return bound
    }
}