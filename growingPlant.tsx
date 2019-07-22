const growingPlant = (upSpeed:number,downSpeed:number,desiredHeight:number):number => {
    let days = 0;
    let totalHeight = 0;
        while(totalHeight < desiredHeight){
            days++
            totalHeight = totalHeight + upSpeed
            if(totalHeight < desiredHeight){
                totalHeight = totalHeight - downSpeed
            }
           
        }
    return days
}

console.log(growingPlant(100,10,910)) //-->10