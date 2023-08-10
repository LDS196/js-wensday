const moveZeros = function (arr) {
    return [
        ...(arr.filter(n => n !== 0)),
        ...(arr.filter(n => n === 0))
    ];
}
// function moveZeros(arr) {
//     return arr.sort((a, b) => b === 0 ? -1 : 0);
// }
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]