const makeArrayConsecutive = (statues:number[]):number => {
    const sortedStatues = statues.sort((a,b)=>b-a)
    let count = 0;
        for(let i = 0 ; i < sortedStatues.length ; i++){
            if((sortedStatues[i]-sortedStatues[i+1])>1){
                count = count + (sortedStatues[i]-sortedStatues[i+1])-1
            }
        }
    return count
    }


console.log(makeArrayConsecutive([6,2,3,8])) // 3
console.log(makeArrayConsecutive([6,2,3,8,11,])) //5 
console.log(makeArrayConsecutive([1,2,3,4,,5,6,9)) //2