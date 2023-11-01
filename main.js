const array1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; // [[1, 6], [8, 10], [15, 18]]
const array2 = [[1, 4], [4, 5]]; // [[1, 5]]
const array3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]; // [[1, 4], [5, 10], [11, 12]]

function merge(intervals) {
    if (intervals.length < 2) return intervals
    intervals.sort((a,b)=> a[0]-b[0])
    let res = [intervals[0]]
    for (let interval of intervals) {
        let recent = res[res.length-1]
        if(recent[1]>= interval[0]){
            recent[1]= Math.max(recent[1],interval[0])
        } else{
            res.push(interval)
        }
    }
    return res
}

console.log(merge(array1));
console.log(merge(array2));
console.log(merge(array3));