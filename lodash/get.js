function get (obj, path, defaultValue = undefined) {
    const paths = path
        .replace(/\[(\w+)\]/g, '.$1')
        .replace(/\["(\w+)"\]/g, '.$1')
        .replace(/\['(\w+)'\]/g, '.$1')
        .split('.')

    let result = obj
    for (const p of paths) {
        result = result?.[p]
    }

    return result === undefined ? defaultValue : result
}