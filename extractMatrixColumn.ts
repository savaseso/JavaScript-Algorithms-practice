const extractMatrixColumn = (arr: number[][], column: number): number[] => {
    
    let returnedValues: number[] = [];
    
    for (let row of arr) {
        returnedValues.push(row[column])
    }
 
    return returnedValues;
}
 
console.log(extractMatrixColumn([[1,1,1,2],[0,5,0,4],[2,1,3,6]], 2));
