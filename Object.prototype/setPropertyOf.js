Object.prototype.setPropertyOf = function (obj, proto) {
    if (obj.__proto__) {
        obj.__proto__ = proto
        return obj
    }   else {
        let Fn = function () {
            for (let key in obj) {
                Object.defineProperty(this, key, {
                    value: obj[key]
                })
            }
        }
        Fn.prototype = proto
        return new Fn()
    }
}