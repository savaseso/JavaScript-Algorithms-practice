const uniqueDigitProducts = (a:number[]):number => {
    const digits:number[]=[];
    for(let number of a){
        if (number.toString().split('').length === 1) {
            digits.push(number)
        } else {
           const moreDigit = number.toString().split('');
           let product:number = 1;
          for(let number of moreDigit){
                product *= parseInt(number)
             
          }
          digits.push(product)
        } 
    }
    console.log(digits)
    return new Set(digits).size

    }
console.log(uniqueDigitProducts([2,8,121,42,222,23]))