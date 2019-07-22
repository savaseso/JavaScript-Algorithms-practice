const firstDuplicate = (a:number[]):number =>{
    const duplicates = {};
    for(let i = 0 ; i < a.length ; i++){
        if(duplicates.hasOwnProperty(a[i])){
            return a[i]
        } else {
            duplicates[a[i]] = a[i]
        }
    }
    return -1
}

console.log(firstDuplicate([2,1,3,5,3,2]))
console.log(firstDuplicate([2,4,3,5,1]))