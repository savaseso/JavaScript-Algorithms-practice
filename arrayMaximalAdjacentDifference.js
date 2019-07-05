const arrayMaximalAdjacentDifference = (inputArray) => {
    let maxDiff = Math.abs(inputArray[0]-inputArray[1]);

    for(let i = 0 ; i < inputArray.length ; i++) {
        let absoluteDiff = Math.abs(inputArray[i] - inputArray[i+1])
        maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;
    }

    return maxDiff;
}