//You are given an array of positive integers, return an array of two integers, where the frist element is the total weight of team 1, second element is the total weight of team 2 after the division os complete

//ex: a = [50,60,60,45,70] ---> [180,105]


const alternatingSums = (array)=>{
    let count = 0;
    for( let i = 0; i<array.length;i+=2){
        count = count + array[i]
    }
    let count1 = 0;
    for( let i = 1; i<array.length;i+=2){
        count1 = count1 + array[i]
    }
    return [count,count1]
}

//or

const alternatingSums = (array)=>{
    let evenSum = 0;
    let oddSum = 0;
    
    array.forEach((element, index) => {
        if(index % 2 === 0){
            evenSum+=element;
        }else {
            oddSum+=element;
        }   
    });
    return [evenSum,oddSum]
}
