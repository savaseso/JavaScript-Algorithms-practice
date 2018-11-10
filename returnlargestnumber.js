//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.


function largestOfFour(arr) {
    let array = [];
    for(let sub of arr) {
      sub.sort((a, b) => a - b);
    }
    for(let i=0;arr.length>i;i++){
        for(let j=0;arr[i].length>j;j++){
       array.push(arr[i][j]) }
    }
       return [array[3],array[7],array[11],array[15]]
    }
    
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
    (4) [5, 27, 39, 1001]