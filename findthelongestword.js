/*Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.*/



function findLongestWordLength(str) {
    const arrayWithWords = str.split(' ');
    let count = 0;
    for(let i=0 ; i < arrayWithWords.length ; i++){
        if(arrayWithWords[i].length>count){
            count=arrayWithWords[i].length;
        }
    }
    return count;
  }