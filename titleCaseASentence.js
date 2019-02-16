/* Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code. */

function titleCase(str) {
    const words = [];
  for (let word of str.split(' ')){
    words.push(word[0].toUpperCase()+ word.slice(1).toLowerCase())
  }
  return words.join(' ');
  }
  
  titleCase("I'm a little tea pot");
  
/*   titleCase("I'm a little tea pot") should return a string.
Passed
titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
Passed
titleCase("sHoRt AnD sToUt") should return Short And Stout.
Passed
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout. */