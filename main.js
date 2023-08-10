function pigIt(str){

    return str
        .split(' ')
        .map(el=>{
        if(isSpecialCharacter(el)) return el
        else {
            return el.slice(1,el.length) + el.slice(0,1) + 'ay'
        }
    })
        .join(' ')
}

function isSpecialCharacter(char) {
    // Регулярное выражение для проверки, является ли символ специальным
    const specialCharacterRegex = /[^\w\s]/;

    return specialCharacterRegex.test(char);
}

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !