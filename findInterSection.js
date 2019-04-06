// Todo: Find intersection between two arrays
// ex. [1,23,65,10,23,1], [8,10,4,2,3,23,65] => [23,65]

const findIntersect = (array1,array2) => {
	const newArray = [];
	array1.forEach(item=>{
 			 if(array2.includes(item) && !newArray.includes(item)){
       	newArray.push(item);
     }
  })
  return newArray;
}


const result = findIntersect([1,23,65,10,23,1], [8,10,4,2,3,23,65]);

console.log(result);