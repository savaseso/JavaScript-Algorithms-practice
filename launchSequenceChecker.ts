
const launchSequenceChecker = (systemNames: string[], stepNumbers: number[]): boolean => {

    let launchPattern = {};
 
    for (let i = 0; i < systemNames.length; i++) {
        if (launchPattern.hasOwnProperty(systemNames[i])) {
            if (launchPattern[systemNames[i]] > stepNumbers[i]) return false;
        } else {
            launchPattern[systemNames[i]] = stepNumbers[i];
        }
    }
 
    return true;
}

console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1,10,11,2,12,111]));
console.log(launchSequenceChecker(["stage_1", "stage_1", "stage_2", "dragon"], [2,1,12,111]));
 