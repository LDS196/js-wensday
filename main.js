function dirReduc(arr) {
     if(arr.length===1) return arr

    let res = []

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        let next = arr[i + 1]

        if (current === "NORTH" && next === "SOUTH" || current === "SOUTH" && next === "NORTH") {
            i = i + 1
            continue
        }
        if (current === "WEST" && next === "EAST" || current === "EAST" && next === "WEST") {
            i = i + 1
            continue
        }
        res.push(current)
    }
    if(res.length===arr.length) return res
    return  dirReduc(res)
}

console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))