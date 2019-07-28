const seatsInTheater = (nCols,nRows,col,row) => {
    const RowsBehind = nRows-row
    const colsBehind = nCols-(col-1)
    return RowsBehind * colsBehind
}

console.log(seatsInTheater(16,11,5,3))