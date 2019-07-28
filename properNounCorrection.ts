const properNounCorrection = (str) => {
    const upperCase =  str.slice(0,1).toUpperCase()
    const lowerCase =  str.slice(1).toLowerCase()
    return upperCase.concat(lowerCase)
  }

  console.log(properNounCorrection('pARis'))
  console.log(properNounCorrection('John'))