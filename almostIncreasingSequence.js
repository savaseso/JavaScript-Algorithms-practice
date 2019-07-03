//Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

/*example: 
[1,3,2,1] -->false
[5,6,3,9] -->true

*/
const almostIncreasingSequence = (arr) => {
    let count = 0;
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]>arr[i+1]){
            count++;
            if(arr[i]>arr[i+2]){
                return false;
            }
        }
    }
    if (count<=1){
        return true
    }
    return false;
}
