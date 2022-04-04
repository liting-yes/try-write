function shellSort (arr) {
    let { length } = arr
    for (let gap=Math.floor(length / 2); gap>0; gap = Math.floor(gap / 2)) {
        for (let i=gap; i<length; i++){
            let temp = arr[i]
            let j
            for (j=i; j>=gap && arr[j-gap] > temp; j -= gap) {
                arr[j] = arr[j-gap]
            }
            arr[j] = temp
        }
    }

    return arr
}

console.log(shellSort([2,32,345,45,23,43,56,4]))