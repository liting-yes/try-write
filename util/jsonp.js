function jsonp_simple({ url, onData, params }) {
    const script = document.createElement('script')
    const cb = `JSON_cb_${Math.random().toString().slice(2)}`
    script.src = `${url}?${stringify({ callback: cb, ...params })}`

    window[cb] = onData

    document.body.appendChild(script)
}