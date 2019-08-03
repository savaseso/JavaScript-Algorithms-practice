const sumOddFibonacciNums = (n:number):number => {
    let result = 0;
    let currentNumber = 1;
    let previousNumber = 0;
    while(currentNumber <= n){
        if(currentNumber % 2 !== 0){
            result += currentNumber;
        }
        const nextCurrent = currentNumber + previousNumber
        previousNumber = currentNumber
        currentNumber = nextCurrent
    }
   


    return result;
}

console.log(sumOddFibonacciNums(10))
console.log(sumOddFibonacciNums(1000))