const rearrangingPalindrome = (inputString) =>{
    const characters = {};
    let count = 0;
    for(let char of inputString){
        if(characters.hasOwnProperty(char)){
            characters[char]++
        } else {
            characters[char] = 1;
        }
    }
    for (const char in characters){
        if(characters[char]%2!==0){
            count++;
        }
    }
    return (count<=1) ? true : false;
    
}

console.log(rearrangingPalindrome('aabb'))
console.log(rearrangingPalindrome('lalab'))
console.log(rearrangingPalindrome('lalaccbs'))

