const containCloseNums = (nums: number[], k: number): boolean=> {
    for(let i = 0 ; i < nums.length ; i++ ){
        for(let j = 0 ; j < nums.length ; j++ ){
            if(i !== j){
                if(nums[i]===nums[j]){
                    if(Math.abs(i-j)<=k){
                        return true
                }
            }
        }
    }
    }
    return false

}

console.log(containCloseNums([0,1,2,3,5,2],3)) //-->true
console.log(containCloseNums([0,1,2,3,5,2],2)) //-->false


