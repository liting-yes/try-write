function debounce (fn, wait) {
    let timer
    return function () {
        let _this = this
        let args = arguments
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function () {
            fn.apply(_this, args)
        }, wait)
    }
}