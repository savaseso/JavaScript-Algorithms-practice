const evenDigitsOnly = (n:number):boolean => {
    const digitsArray = n.toString().split('')
    return digitsArray.every(digit => parseInt(digit)%2 === 0)
}
console.log(evenDigitsOnly(2221))