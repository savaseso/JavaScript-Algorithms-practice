const largestFour = (array:number[][]) => {
    for(let subArray of array){
        subArray.sort((a,b) =>b-a)
    }
    return [array[0][0],array[1][0],array[2][0],array[3][0]]
}
console.log(largestFour([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]]))
console.log(largestFour([[4,9,2,3],[13,35,18,26],[32,35,97,39],[1000000,1001,857,1]]))

const largestOfFour = (arr: number[][]): number[] => arr.map((element) => { return Math.max(...element); });
 

 
console.log(largestOfFour([[4,5,1,3],[12,27,18,26],[32,35,37,39],[1000,1001,857,1]]));
console.log(largestOfFour([[4,9,1,3],[13,35,18,26],[32,35,97,39],[1000000,1001,857,1]]));