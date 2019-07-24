const integerToStringOfFixedWidth = (number:number,width:number):string => {
    const stringNum = number.toString()
    const numberWidth = stringNum.length
    const withDiff = width-numberWidth;

    if(width > numberWidth){
        let padstart = '';
        for(let i = 0 ; i < withDiff ; i++){
            padstart = padstart.concat('0')
        }
        return padstart + stringNum
    } else {
       return stringNum.substr(numberWidth-width,width)
    }
}

console.log(integerToStringOfFixedWidth(1234,4)) //-->1234
console.log(integerToStringOfFixedWidth(1234,2)) //-->34
console.log(integerToStringOfFixedWidth(1234,5)) //-->01234
console.log(integerToStringOfFixedWidth(1234,6)) //-->001234


