/* For l = [1, 2, 3, 4, 5] and k = 2, the output should be
reverseNodesInKGroups(l, k) = [2, 1, 4, 3, 5];
For l = [1, 2, 3, 4, 5] and k = 1, the output should be
reverseNodesInKGroups(l, k) = [1, 2, 3, 4, 5];
For l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] and k = 3, the output should be
reverseNodesInKGroups(l, k) = [3, 2, 1, 6, 5, 4, 9, 8, 7, 10, 11]. */

const reverseNode = (l,k) => (l:number[], k:number) {
    const chunked:number[] = [];
    const newArray:number[] = [];
    let index = 0;
    while(index<l.length){
      chunked.push(l.slice(index,index+k))
      index+=k;
    }
    for(let subArray of chunked){
        if(subArray.length === k){
            subArray.reverse()
        }
        subArray.forEach(number => newArray.push(number))
    }
    return newArray
}

console.log(reverseNode([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],3))