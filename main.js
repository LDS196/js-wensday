const arr = [5, 1, 3, 412, 12, 512]

const findMaxMin = (arr) => {
    let min = arr[0]
    let max = arr[0]
    for (let i = 1; i <= arr.length; i++) {
        const item = arr[i]
        if(item<min){
            min=item
        }
        else if(item>min){
            max=item
        }
    }
    return{min,max}
}
console.log(findMaxMin(arr))