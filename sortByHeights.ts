const sortByHeights = (a) => {
    const filteredArray = a.filter(number => number !== -1).sort((a,b) => a-b)
    let indexVal = 0;
        for(let i = 0 ; i<a.length ; i++){
            if(a[i] !== -1){
                console.log(a[i])
                a[i] = filteredArray[indexVal]
                indexVal++;
            }
        }
    return a
}
console.log(sortByHeights([-1,150,190,170,-1,-1,160,180])) //-> [-1,150,160,170,-1,-1,180,190]
