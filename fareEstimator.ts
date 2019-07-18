const fareEstimator = (ride_time:number,ride_distance:number,cost_per_minute:number[],cost_per_mile:number[]) => {
    const fares:number[]= [];
        for(let i=0; i< cost_per_minute.length; i++) {
            fares.push(Math.round(ride_time*cost_per_minute[i]+ride_distance*cost_per_mile[i]))
        }
    return fares;
}

console.log(fareEstimator(30,7,[0.2,0.35,0.4,0.45],[1.1,1.8,2.3,3.5])) //-->[14,23,28,38]