//'5' -->odd
//'8' -->even
//'q' --> not a digit

const characterParity = (input: any):any => {
    if(isNaN(input)===true){
        return 'not a digit'
    } else {
        if(parseInt(input)%2 === 0) {
            return 'even' 
        } else {
            return 'odd'
        }        
    }
}