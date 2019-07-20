const findEmailDomain = (address) => {
const atSign = address.lastIndexOf('@')
    return address.slice(atSign+1)
}
console.log(findEmailDomain('bence@gmail.com'))
console.log(findEmailDomain('&@@&&#><@gmail.com'))