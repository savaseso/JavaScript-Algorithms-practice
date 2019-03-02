//Check whether the given string is a subsequence of the plaintext alphabet

//ex: s="effg" or s="cdce" or s="effg" or s="zab" ---> false
//ex: s="ace" or s="bxz" ---> true



function subSequence (str){
    const characterValues = [];
    const characters = str.split('')
    characters.forEach(char => {
        characterValues.push(char.charCodeAt(0))
        })
    if(new Set(characterValues).size !== characterValues.length){
        return false;
    }
    for(let i = 0; i<characterValues.length;i++){
        if(characterValues[i]>= characterValues[i+1]){
            return false;
        }
    }

       return true;
    }
