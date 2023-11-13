function filter(list) {
return list.filter(item=> Number.isInteger(item))
}
const inputList = [1, "apple", 3, "banana", 5, -2, "cherry"];
// 2. Напишите функцию accum:
//     accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(str) {
    return str
        .split('')
        .map((item,index)=>(item.toUpperCase() + item.toLowerCase().repeat(index)))
        .join('-')
}

console.log(accum('RqaEzty'))
// 3. Напишите функцию, которая выдаёт сумму выручку на основании входного формата данных
const products = [
    { name: 'Футболка', price: 20, quantity: 2 },
    { name: 'Джинсы', price: 50, quantity: 1 },
    { name: 'Носки', price: 5, quantity: 10 },
    { name: 'Штаны', price: 30, quantity: 1 }
];

function calculateSum(list){
    return list.reduce((acc,item)=> acc + item.price * item.quantity,0)
}

console.log(calculateSum(products))