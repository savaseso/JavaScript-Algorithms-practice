
//Given an array of 2k integers perform the following operations until the array contains only one element

//ex: For inputArray = [1,2,3,4,5,6,7,8] the output should be arrayConversion(inputArray) = 186

// we have [1,2,3,4,5,6,7,8] --> [3,7,11,15] --> [186]

function arrayConversion (inputArray){
    let isOdd = true;

    while(inputArray.length !== 1){
        inputArray = sumProduct(inputArray, isOdd);
        idOdd = !isOdd;


    }

    return inputArray[0];

}


function sumProduct(nums, isOdd) {
    const sumProducts = [];

    if(isOdd){
        for(let i = 0; i < nums.length; i +=2 ){
            sumProducts.push(nums[i] + nums[i + 1]);
        }
    } else {
        for(let i = 0; i < nums.length; i +=2 ){
            sumProducts.push(nums[i] * nums[i + 1]);
        }
    }
    return sumProducts;
}
