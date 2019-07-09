//[1,2,1] --> [3,2,3]

const arrayReplace = (inputArray,elemToReplace,substitutionElem) => {
    inputArray.forEach((element,index) => {
        if (element === elemToReplace){
            inputArray[index] = substitutionElem
        }
    });
    return inputArray;
}