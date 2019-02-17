
/* Basic Algorithm Scripting: Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

Remember to use Read-Search-Ask if you get stuck. Write your own code.


 */
function bouncer(arr) {
    return arr.filter(Boolean);
  }
  bouncer([7, "ate", "", false, 9]);



/* return arr.filter() returns a new array with everything that wasn’t filtered out. Filter() takes a function that
 does some logic and returns true or false, and filter() runs that function on each item in the array. 
 So it runs Boolean on each item in the array. Boolean takes an argument and returns true as long as the value of the argument is anything other than falsy.
  So it’s returning true for “ate” but not for “”. When Boolean returns true, filter() says “cool, add this item from the original array to my new filtered array”
 and when Boolean returns false filter() is like “put this item from the original array in the garbage because it’s a piece of falsy garbage” */