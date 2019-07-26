/*After becoming famous, CodeBots decided to move to a new building and
live together. The building is represented by a rectangular matrix of rooms,
each cell containing an integer - the price of the rom. Some rooms are free
(their cost is 0), but that's probably because they are haunted, so all the bots
are afraid of them. That is why any room that is free of located anywhere below
a free room in the same column is not considered suitable for the bots.
 
Help the bots calculate the total price of all the rooms that are suitable
for them.
 
*/


/* const matrixElementSum = (matrix:array[][]):number => {
   let priceTotal:number = 0;
   const bannedIndex:number[] = []
   for(let i = 0 ; i < matrix.length; i++){
    for(let j = 0 ; j < matrix[i].length; j++){
        if(matrix[i][j] === 0){
            bannedIndex.push(j)
        } else if (!bannedIndex.includes(j)){
            priceTotal += matrix[i][j]
        }
   }
}
   return priceTotal;
}

console.log(matrixElementSum([[0,1,1,2],[0,5,0,0],[2,0,3,3]])) // 9
 */

const matrixElementsSum = (matrix: any[][]): number => {
    const rooms = [];
 
    for (let i = 0; i < matrix[0].length; i ++) {
        for (let j = 0; j < matrix.length; j ++) {
            if (matrix[j][i] === 0) {
                break;
            } else {
                rooms.push(matrix[j][i]);
            }
        }
    }
 
    return rooms.reduce((a, b) => a + b);
}
console.log(matrixElementsSum([[0,1,1,2],[0,5,0,0],[2,0,3,3]])) // 9
