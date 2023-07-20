let words = ['banana','grapefruit','banana','grapefruit','banana', 'orange', 'banana']

function mySort(arr){
    const obj={}
    for (let i = 0; i < arr.length; i++) {
        const key = arr[i]
        if(obj.hasOwnProperty(key)){
            obj[key]=obj[key] + 1
        } else{
            obj[key]=1
        }
    }
    let res=[]
    for (const objElement in obj) {
        res.push({name:objElement,count:obj[objElement]})

    }

    return res.sort((a,b)=> b.count-a.count).map(el=> el.name)
}

