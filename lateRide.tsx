const lateRide = (n:number):number => {
    const hours = Math.floor(n/60)
    const minutes = n%60
    const hoursArr = hours.toString().split('')
    const minutesArr = minutes.toString().split('')
    const together = hoursArr.concat(minutesArr)
    return together.reduce((total, element)=>  total = total + parseInt(element),0)
}

console.log(lateRide(240))
console.log(lateRide(808))
console.log(lateRide(333))