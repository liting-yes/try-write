// 编码 URL 参数

function stringify (data) {
    const pairs = Object.entries(data)
    let res = pairs.map(([k, v]) => {
        let noValue = false
        if (v===null || v===undefined || typeof v === 'object') {
            noValue = true
        }

        return `${encodeURIComponent(k)}=${noValue ? '' : encodeURIComponent(v)}`
    }).join('&')

    return res
}
