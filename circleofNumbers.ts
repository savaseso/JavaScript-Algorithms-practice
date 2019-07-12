const circleOfNumbers = (n :number, firstNumber: number): number => {
    const numArray = [];
    const halfWay = n/2;
    
    for(let i = 0 ; i < n ; i++){
        numArray.push(i)
    }
    if(halfWay > firstNumber){
        return numArray[firstNumber + halfWay]
    }
    return numArray[firstNumber - halfWay]
}

// 10,2 --> 7