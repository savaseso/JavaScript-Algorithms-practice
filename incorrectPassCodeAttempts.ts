const incorrectPassCodeAttempts = (passcode:string,attempts:string[]) => {
    let failedAttempts = 0;
    for(let i = 0 ; i < attempts.length ; i++){
        if(attempts[i]!==passcode){
            failedAttempts ++;
            if (failedAttempts === 10){
                return true
            }
        } 
    }
    
    return false;
}

console.log(incorrectPassCodeAttempts('1111',['1111','4444','9999','3333','8888','4444','2222','7777','4444','7285','5321','5555','1111','4343'])) //-->true