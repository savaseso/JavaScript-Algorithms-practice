const longestDigitsPrefix = (inputString:any):string =>{
    let prefix = '';
    for(let char of inputString){
        if(isNaN(char)===false){
            prefix += char
        }  else {
            break; 
        } 
            }    
    return prefix
}

console.log(longestDigitsPrefix('123aa1'))