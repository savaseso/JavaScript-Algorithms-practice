 const sumOfTwo = (a:number[],b:number[],v:number) => {
    const numbers:number[] = [];
    for(let numberA of a){
        for(let numberB of b){
            numbers.push(numberA+numberB)
        }}
        console.log(numbers)
    return numbers.includes(v)
}


console.log(sumOfTwo([1,2,3],[10,20,30,40],42))

 
