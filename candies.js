const candies = (n,m) => n<=m ? Math.floor(m/n)*n : 0
//each child will eat 3 pieces so the answer is 9
console.log(candies(3,10))