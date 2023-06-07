const tree = [
    {
        v: 5,
        c: [
            {
                v: 8,
                c: [
                    {v: 9}
                ]
            },
            {
                v: 8,
                c: [
                    {
                        v: 4
                    }
                ]
            }
        ]
    }
]

function some(arr) {
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        res += arr[i].v
        if(!arr[i].c){
            return arr[i].v
        } else {
           res +=  some(arr[i].c)
        }
    }
return res
}


