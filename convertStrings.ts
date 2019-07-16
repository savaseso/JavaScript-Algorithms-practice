const convertString = (orignalString, newString) => {
 
    if (newString.length > orignalString.length) return false;
    
    let testString= "", pointer = 0;
 
    for (let i = 0; i < orignalString.length; i++) {
        if (orignalString[i] === newString[pointer]) {
            testString += orignalString[i];
            pointer++;
        }
    }
    return testString === newString;
    
}

console.log(convertString('ceyodefthiyg5h5yts', 'codefights')); //true
console.log(convertString('addbyca', 'abcd')); //false