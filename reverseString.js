//reverse a string

function reverse (str) {
    let reversed = '';
    for(character of str){
        reversed=charcter+reversed;
        debugger;
    }
    return reversed;
}

reverse('Hi There');

//or

function reverse (str) {
    return str.split('').reverse().join('');
}


reverse('Welcome');
