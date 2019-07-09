const isCaseSensitivePalindrome = (inputString) => {
    const originalLowerCase = inputString.toLowerCase()
    const reversed = originalLowerCase.split('').reverse().join('');
    return originalLowerCase === reversed;
}
console.log(isCaseSensitivePalindrome('Aba'))