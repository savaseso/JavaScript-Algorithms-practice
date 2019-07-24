const isLucky = (n:number):boolean =>{
    const luckyN = n.toString().split('')
    const halfWay = luckyN.length/2
    const firstHalf = luckyN.slice(0,halfWay)
    const secondHalf = luckyN.slice(halfWay,luckyN.length)
    const firstNumber = firstHalf.reduce((total,element) => {
        return parseInt(element) + total
    },0)
    const secondNumber = secondHalf.reduce((total,element)=>{
        return parseInt(element) + total
    },0)
    return firstNumber === secondNumber
}

console.log(isLucky(1230)) //true
console.log(isLucky(239017))//false
console.log(isLucky(1661))//true
