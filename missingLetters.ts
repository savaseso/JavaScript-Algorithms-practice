const missingLetters = (characters:string) =>{
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    const charactersArray = characters.split('')
    for(let i = 0 ; i < charactersArray.length ; i++){
        if(charactersArray[i] !== alphabet[i]){
            return alphabet[i]
        }
    }
}

console.log(missingLetters("abce"))
console.log(missingLetters("abcdefghjklmno"))
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"))