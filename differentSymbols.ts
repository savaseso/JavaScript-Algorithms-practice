const differentSymbolsNaive = (s:string):number => {
    const charCode:number[] = [];
    const stringArray:string[] = s.split('')
    stringArray.forEach(char => {
        charCode.push(char.charCodeAt())
    });
    return new Set(charCode).size
}

differentSymbolsNaive1('cabcaa') //-->3
