const flatten = (items) => {
    let result = []
    for (let index = 0; index < items.length; index++) {
        const item= item[index]
        if(Array.isArray(item)){
            result= result.concat(flatten(item))
        } else{
            result.push(item)
        }
    }
    return result
};


