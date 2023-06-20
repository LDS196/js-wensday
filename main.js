
const matrix = [
    [ 6, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function rotate(source) {
    const res = source[0].map(()=>[])

    for (let i = 0; i <matrix.length ; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            res[matrix.length-1-i][matrix.length-1-j] = source[i][j]
        }
    }
    return res
}


