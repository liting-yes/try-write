function shuffle1 (list) {
    return list.sort((a, b) => Math.random() - 0.5)
}

function shuffle2 (list) {
    let len = list.length
    let result = [...list]

    while (len) {
        let index = Math.floor(Math.random() * len--)
        console.log(result[len], result[index])
        [result[len], result[index]] = [result[index], result[len]]
    }

    return result
}

console.log(shuffle2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))