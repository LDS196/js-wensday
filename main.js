const arr = [6.5, 5.6, 5.7, 6.1]


function groupBy(arr, callback) {
    let res = {}
    arr.forEach(item => {
        const elAfterCallback = callback(item)
        res[elAfterCallback]
            ? res[elAfterCallback].push(item)
            : res[elAfterCallback] = [item]
    })
    return res
}

console.log(groupBy(arr,Math.floor))