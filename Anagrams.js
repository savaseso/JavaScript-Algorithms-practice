function anagrams(StringA,StringB) {
 return cleanString(StringA)===cleanString(StringB)
}

function cleanString(str){
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}
