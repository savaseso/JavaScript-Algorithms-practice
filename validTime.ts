const validTime = (time:string) => {
    const hourMinutes = time.split('');
    console.log(hourMinutes)
    const hours = parseInt(hourMinutes.slice(0,2).join(''))
    const minutes = parseInt(hourMinutes.slice(3,5).join(''))
    if(hours<25 && minutes < 60){
        return true;
    }
    return false;
}

console.log(validTime('12:60'))
console.log(validTime('12:58'))
console.log(validTime('02:76'))
console.log(validTime('02:46'))