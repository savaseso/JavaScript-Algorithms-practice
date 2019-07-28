const seekAndDestroy = (first,second) => first.filter(element=>!second.includes(element))


console.log(seekAndDestroy([3,5,1,2,2],[2,3,5]))
console.log(seekAndDestroy([1,2,3,5,1,2,3],[2,3]))