const largestNumber = (n:number) => {
    let largestN = ''
    for(let i = 0 ; i < n ; i++){
        largestN = '9' + largestN
    }
    return parseInt(largestN)
}

console.log(largestNumber(2))