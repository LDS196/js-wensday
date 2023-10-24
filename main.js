function findMax(arr, num) {
    let max = -Infinity; // Начальное значение максимального числа, выбрано как отрицательная бесконечность

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < num && arr[i] > max) {
            max = arr[i];
        }
    }

    return max !== -Infinity ? max : null; // Возвращаем максимальное число или null, если подходящего числа не найдено
}

const result = findMax([1, 5, 3, 5, 6, 150, 33], 35);
console.log(result); // Выведет 33


