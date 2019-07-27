const pagesNumberingWithInk = (current:number,numberOfDigits:number) =>{
 const numbers = [];
 const pages = [];
 let count = 0;
 for(let i = current ; i<current+numberOfDigits ;i++){
     numbers.push(i)
    }
    numbers.forEach(number => {
       count = count + number.toString().length
       if(count <= numberOfDigits){
            pages.push(number)
       }
    })
 return pages.join(' ')
}
console.log(pagesNumberingWithInk(1,5)) //-->1 2 3 4 5
console.log(pagesNumberingWithInk(21,5)) //-->21 22
console.log(pagesNumberingWithInk(21,4)) 
console.log(pagesNumberingWithInk(21,2)) 


// const pagesNumberingWithInk = (current, numberOfDigits) =>{
 
//     let inkRemaining = numberOfDigits;
//     let printCurrentPage = current - 1;
 
//     while (inkRemaining >= printCurrentPage.toString().length){
//         printCurrentPage++;
//         inkRemaining = inkRemaining - printCurrentPage.toString().length;    
//     }
    
//     return printCurrentPage;