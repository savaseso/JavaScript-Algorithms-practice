const steamrollArray = (array:array):array => {
    const oneArray:any[] = [];
    const flatten = (arr) =>{
        arr.forEach(element =>{
            if(Array.isArray(element)){
                flatten(element)
            } else {
                oneArray.push(element)
            }
        })
    }
    flatten(array)
    
    return oneArray;

}

console.log(steamrollArray([1, 2, [3, 4, [5, 6]]]))