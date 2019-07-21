 const firstDigit = (inputString:string):string => {
    for(let i = 0 ; i < inputString.length ; i++){
        if(!isNaN(inputString[i]))
        return inputString[i]
    }
} 

console.log(firstDigit('qdsmds1a'))
console.log(firstDigit('q0dsmdsa'))
console.log(firstDigit('q_dsda3dsmdsa'))

