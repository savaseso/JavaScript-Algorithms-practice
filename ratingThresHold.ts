const ratingThresHold = (threshold:number,ratings:number[][]):number[] => {
    const review:number[] = []
    for(let i = 0 ; i < ratings.length ; i++){
        let totalRating = 0;
        ratings[i].forEach((number)=>{
            totalRating += number
        })
        console.log(totalRating)
        if(totalRating/ratings[i].length < threshold){
            review.push(i)
        }
    }
    return review;
}

console.log(ratingThresHold(3.5,[[3,4],[3,3,3,4],[4]]))