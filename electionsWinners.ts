const electionWinners = (votes:number[],k:number):number =>{
    let count = 0;
    const mostVotes = Math.max(...votes)
    const sortedArray = votes.sort((a,b)=>b-a)

    if(sortedArray[0] !== sortedArray[1] && k === 0){
        return 1;
    }
        votes.forEach(vote => {
            if(mostVotes - vote < k){
                count++
            }
        })
        return count;
}
console.log(electionWinners([2,3,5,2],3))
