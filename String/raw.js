String.raw = function (strings, ...values) {
    let optput = ''
    let index
    for (index = 0; index < values.length; index++)
        output += strings.raw[index] + values[index]
    output += strings.raw[index]
    return output
}