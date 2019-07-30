const stringConstruction = (a:string,b:string):number => {
    const obj:object = {};
    const letterNumbers:number[] = [];
    for(let char of b){
        if(a.includes(char)){
            if(obj.hasOwnProperty(char)){
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }  
    }
            for(const number in obj){
                if(obj[number]){
                    letterNumbers.push(obj[number])
                }
            }
    return Math.min(...letterNumbers)
}
console.log(stringConstruction('abc','abcbca')) //-->2