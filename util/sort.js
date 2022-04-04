// 辅助函数

function swap (array, a, b) {
    [array[a], array[b]] = [array[b], array[a]]
}

function quickSort (arr) {
    let { length } = arr
    let left = [], right = []
    let pivot = arr[0]

    for (let i=1; i<length; i++) {
        if ( arr[i] < pivot) {
            left.push(arr[i])
        }   else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(pivot, quickSort(right))
}

function findMaxValue (arr) {
    let max = arr[0]
    for (let i=1; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    return max
}

// 排序

function bubbleSort (arr) {
    const { length } = arr
    for (let i=0; i<length; i++) {
        for (let j=0; j<length-1-i; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
            }
        }
    }
}

function selectSort (arr) {
    const { length } = arr
    let indexMin
    for (let i=0; i<length-1; i++) {
        indexMin = i
        for (let j=i+1; j<length; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j
            }
        }
        if (i !== indexMin) {
            swap(arr, i, indexMin)
        }
    }
}

function insertSort (arr) {
    const { length } = arr.length
    let temp
    for (let i=1; i<length; i++) {
        let j = i
        temp = arr[i]
        while (j>0 && arr[j-1] > temp) {
            arr[j] = arr[j-1]
            j--
        }
        arr[j] = temp
    }
}

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

function mergeSort (arr) {
    if (arr.length > 1) {
        const { length } = arr
        const mid = Math.floor(length / 2)
        const left = mergeSort(arr.slice(0, mid))
        const right = mergeSort(arr.slice(mid, length))
        arr = merge(left, right)
    }

    return arr
}

function merge (left, right) {
    let i = 0, j = 0
    const res = []

    while (i<left.length && j<right.length) {
        result.push(left[i] <= right[j] ? left[i++] : right[j++])
    }

    return result.concat(i<left.length ? left.slice(i) : right.slice(j))
}

function countSort (arr) {
    let { length } = arr
    if (length === 1){
        return arr
    }

    const maxValue = findMaxValue(arr)
    const counts = new Array(maxValue + 1)

    arr.forEach(item => {
        if (!counts[item]) {
            counts[item] = 0
        }
        counts[item]++
    })

    let sortedIndex = 0
    counts.forEach((count, i) => {
        while (count > 0) {
            arr[sortedIndex++] = i
            count--
        }
    })

    return arr
}
