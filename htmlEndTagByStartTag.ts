const htmlEndTagByStartTag = (tag) => {
    const splitString = tag.toString().split(' ')
    const slicedArray = splitString[0].slice(1)
    const closingTag = ['<','/',...slicedArray];

    return closingTag.join('')
}

console.log(htmlEndTagByStartTag('<i>'))
console.log(htmlEndTagByStartTag("<button type='button' disabled>"))