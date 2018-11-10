// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


function palindrome (str){
    const reversed = str.split('').reverse().join('')
    return reversed === str;
}


// OR 

function palindrome (str){
  return  str.split('').every((char,i)=>{
    return char === str[str.length-1-i]
    })
}

function pyramid(n){
    for(row=0;row<n;row++){
        let stair = "";
        for(column=0;column<n*2-1;column++){
            if (column>=row){
                stair+="#"
            }else{stair+=""}
        }
        console.log(stair)
    }
}