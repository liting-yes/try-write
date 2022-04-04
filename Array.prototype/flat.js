function myFlat (arr) {
    let arrFlat = []
    arr.forEach(item => {
        if (Array.isArray(item)) {
            const itemFlat = myFlat(item)
            arrFlat.push(...itemFlat)
        }   else {
            arrFlat.push(item)
        }
    })

    return arrFlat
}

console.log(myFlat([1, [2, 3], [4, [5, [6, 7]]]]))