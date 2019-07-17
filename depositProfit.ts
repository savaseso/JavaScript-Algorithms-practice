
const depositProfit = (deposit, rate, threshold) => {
    let year = 0;
    let total = deposit
    while(total<threshold){
       total = total+total*(rate/100)
       year++
    }
    return year;
}