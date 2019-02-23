

/* Given an integer, return an integer that is the reverse ordering of numbers.
 */
function reverseInt(num){
    const reversed = num.toString().split('').reverse().join('');
    return parseInt(reversed)*Math.sign(num)
}