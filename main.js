const obj1 = {
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4, {first: "1", second: "2",}],
    fifth: null,
    sixth: undefined,
    seventh: {
        first: "1",
        second: "2",
    }
}



function strCount(obj) {
    let count = 0
    for (const key in obj) {
        if (typeof obj[key] === "string") count++
        if (typeof obj[key] == "object") count += strCount(obj[key])
    }

    return count
}

const arr = ["Jacob", "Alex"]

function likes(names) {
switch (names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default:  return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
}
}

function sum (a,b){
    return ()=> a * b

}

console.log(sum(2,4)())