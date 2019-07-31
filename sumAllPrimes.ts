const sumAllPrimes = (num) =>{     
    let total = 0;  
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j <= i; j++) {
            if (i === j) {
                total += i;
               }
           
           if (i % j === 0) {
               break;
           }
       }   
    }
    return total
}

console.log(sumAllPrimes(9)) //-->17
console.log(sumAllPrimes(977))

 /* const sumAllPrimes = (num) =>{
     
     let primes = [];
     
     for (let i = 2; i <= num; i++) {
         
         let isPrime = true;
         for (let j = 2; j <= i; j++) {
             if (i % j === 0 && j !== i) {
                 isPrime = false;
                }
            }
            if (isPrime === true) {
                primes.push(i);
            }
        }
        
        return primes.reduce((total, element)=>{return total += element});
    } */
    