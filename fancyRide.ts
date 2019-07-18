const fancyRide = (l:number,fares:number[]) => {
    const myMoney = 20;
    const options: string[] = ["UberX","UberXL","UberPlus","UberBlack","UberSuv"]
    for(let i = fares.length ; i >= 0 ; i --){
         if  (fares[i]*l <= myMoney) {
            return options[i]
        }
    }
    return "its too much money"
}
console.log(fancyRide(30,[0.3,0.5,0.7,1,1.3])) //-->Uber XL

