/* Basic Algorithm Scripting: Slice and Splice
You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

Remember to use Read-Search-Ask if you get stuck. Write your own code. */


function frankenSplice(arr1, arr2, n) {
    const begining = arr2.slice(0,n);
    const end = arr2.slice(arr2.length-n,arr2.length);
    
      return [...begining,...arr1,...end];
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

/*   Passed
frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
Passed
frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
Passed
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
Passed
All elements from the first array should be added to the second array in their original order.
Passed
The first array should remain the same after the function runs.
Passed
The second array should remain the same after the function ru */