const isTandemRepeat = (inputstring) => {
    const wordLength = inputstring.length
    
    if(wordLength % 2 === 0){
        return inputstring.slice(0,wordLength/2) === inputstring.slice(wordLength/2,wordLength)
    }
    return false
}
console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))