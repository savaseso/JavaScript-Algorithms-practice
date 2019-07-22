const firstNotRepeating = (s:string):string => {
    const repeatingCharacters = {};
    const characters:string[] = s.split('');
    for(let character of characters){
        if(repeatingCharacters.hasOwnProperty(character)){
            repeatingCharacters[character]++
        } else {
            repeatingCharacters[character] = 1
        }
    }
    for (const char in repeatingCharacters){
        if(repeatingCharacters[char] === 1){
            return char
        }
    }
    return '_'
}

console.log( firstNotRepeating("abacabad")) //-->c
console.log( firstNotRepeating("abacbaabacaba")) //-->_