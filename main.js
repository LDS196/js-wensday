const str = 'abcdAw'
function isUnique(string) {
    for (let i = 0; i < string.length; i++) {
        const char = string[i]
        if(string.lastIndexOf(char)!== i){
            return false
        }
    }
    return true
}
// function isUnique(string) {
//     const mySet = new Set()
//     for (const char of string) {
//         if(mySet.has(char)){
//             return false
//
//         } else{
//             mySet.add(char)
//         }
//     }
//     return true
// }
//
// console.log(isUnique(str))
// console.log('a'==='A')