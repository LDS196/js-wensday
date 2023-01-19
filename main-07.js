//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
function repeatString (word, number, sign){
let arr=[]
    for (let i = 0; i < number; i++) {
        arr.push(word)
    }
    return arr.join(sign)
}

// console.log(repeatString("yo", 3, " "))
// console.log(repeatString("yo", 3, ","))
//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
function checkStart(string, substring){
    return string.toLowerCase().startsWith(substring.toLowerCase())
}

// console.log(checkStart("Incubator", "inc"))
// console.log(checkStart("Incubator", "yo"))
//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
function truncateString(string, number){
    let arr = string.split([,])
    arr.length=10
    return arr.join('') + '...'
}

// console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))
//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null
function getMinLengthWord(string){
    let arr;
    if(typeof string === "string" || string.length){
        arr = string.split(' ')
       arr.sort((a,b)=> a.length - b.length)
        return arr[0]
    } else{
        return null
    }
}
// console.log(getMinLengthWord(''))
//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"

function setUpperCase(string){
  return  string.split(' ').map(el=> el.toLowerCase()).map(el=>el[0].toUpperCase() + el.slice(1,el.length)).join(' ') + '!'


}

// console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ"))
// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке


// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false

function isIncludes (string, substring){
}

console.log(isIncludes("Incubator", "inbba"))


  




