const tank = [
    {id: 1, type: 'mango', price: 35},
    {id: 2, type: 'mango', price: 77},
    {id: 3, type: 'potato', price: 84},
    {id: 4, type: 'potato', price: 25},
    {id: 5, type: 'mango', price: 33},
    {id: 6, type: 'apple', price: 50},
    {id: 7, type: 'mango', price: 89},
    {id: 8, type: 'apple', price: 60},
    {id: 9, type: 'mango', price: 51},
    {id: 10, type: 'apple', price: 82},
];
// Задача 1: Написать функцию, создающую
// новый массив из исходного. В новом массиве должны быть удалены
// удалены все объекты с type: 'mango', а для 'apple' цены (значение поля price) умножены на 3.
function getModifiedArray(arr, deletedType, ModifiedType, number) {
    let res = []
    arr.forEach(item=>{
        if (item.type !== deletedType) {
            if (item.type === ModifiedType) {
                const copyItem ={...item}
                copyItem.price = copyItem.price * number
                res.push(copyItem)
            } else {
                res.push(item)
            }
        }
    })
    return res
}

console.log(getModifiedArray(tank,'mango','apple',3),tank)