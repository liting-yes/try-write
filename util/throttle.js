function throttle1 (fn , wait) {
    let time = 0

    return function () {
        let _this = this
        let args = arguments
        let now = Date.now()

        if (now - time > wait) {
            fn.apply(_this, args)
            time = now
        }
    }
}


function throttle2 (fn , wait) {
    let timer

    return function () {
        let _this = this
        let args = arguments

        if (!timer) {
            timer = setInterval(function() {
                timer = null
                fn.apply(_this, args)
            }, wait)
        }
    }
}