const pigLatin = (inputString:string):string => {
    const inputStringSplit = inputString.split('')
    const vowels:string[]  = ['a','e','i','o','u'];
    const consonantArray:string[] = [];
    
    if(vowels.includes(inputStringSplit[0])){
        return `${inputString}way`
    }
    for(let i = 0 ; i < inputStringSplit.length ; i++){
        if(!vowels.includes(inputStringSplit[i])){
            consonantArray.push(inputStringSplit[i])
        } else {
            break;
        }
    }
    return inputString.slice(consonantArray.length) + consonantArray.join('') + 'ay'
}

console.log(pigLatin('glove')) //--> oveglay
console.log(pigLatin('eight')) //-->eightway
