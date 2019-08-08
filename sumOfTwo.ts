 const sumOfTwo = (a:number[],b:number[],v:number) => {
    const numbers:number[] = [];
    for(let i = 0 ; i < a.length ; i++){
        for(let j = 0 ; j < b.length ; j++){
            numbers.push(a[i]+b[j])
        }}
        console.log(numbers)
    return numbers.includes(v)
}


console.log(sumOfTwo([1,2,3],[10,20,30,40],42))

 
