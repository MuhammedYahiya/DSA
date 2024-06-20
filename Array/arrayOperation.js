let arr = [1, 2, 3, 4, 5]
let len = arr.length

let arrayTraversal = (arr) => {
    for (x of arr) {
        console.log(x);
    }
}

let arrayTraversalUsingMap = (arr) => {
    return arr.map((element) => {
        return element
    })
}

let insertAtAnyPosition = (len, pos, arr, element) => {
    let i = len - 1
    for (i; i >= pos - 1; i--) {
        arr[i + 1] = arr[i]
    }
    arr[pos - 1] = element
    return arr

}

let findElement = (arr, len, key) => {
    for (let i = 0; i < len; i++) {
        if (arr[i] === key) {
            return i
        }
    }
    return -1
}

let deleteFromAnyPosition = (arr, len, key) => {
    let pos = findElement(arr, len, key)
    if (pos === -1) {
        return "Element not Found"
    }

    for (i = pos; i < len - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length = len - 1
    return arr

}

