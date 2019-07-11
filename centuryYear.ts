const centuryFromYear = (year: number):number => {
    const century = year/100
        if(year%100 === 0){
            return century
        }
            return Math.floor(century) + 1 
}

console.log(centuryFromYear(201))

//1905-->20
//1700-->17 