function highestFrequency(array) {
    let res = {}
    let maxTempCount = 0
    let maxTempStr =array[0]
    for (let i = 0; i < array.length; i++) {
        const current = array[i]
        if (res.hasOwnProperty(current)) {
            res[current] = res[current] + 1
        } else {
            res[current] = 1
        }
        if(res[current]> maxTempCount){
            maxTempCount = res[current]
            maxTempStr = current
        }
    }

    return maxTempStr
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi'])) // -> ghi