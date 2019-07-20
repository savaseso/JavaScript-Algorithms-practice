const findClosestPair = (arr:number[],num:number) => {
    let distance = -1;
    
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i+1 ; j < arr.length ; j++){
                const distanceSum = arr[i] + arr[j]
                const absDistance = Math.abs(i-j);

                if(num === distanceSum){
                    if(distance === -1 || absDistance < distance){
                        distance = absDistance
                    }
                }
            }
            
        }
       return distance
    }



console.log(findClosestPair([1,0,2,4,3,0],5)) //-->2


