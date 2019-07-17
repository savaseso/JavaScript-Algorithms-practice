const domainType = (arr:string[]):string[] => {
 
    let domainArray = [];

    for (let i = 0; i < arr.length; i++) {
        let ending = arr[i].substring(arr[i].length - 3);
        switch(ending){
            case 'org':
            domainArray.push('organization');
            break;
            case 'com':
            domainArray.push('commercial');
            break;
            case 'net':
            domainArray.push('network');
            break;
            case 'nfo':
            domainArray.push('information');
            default:
            break;
        }
    }
    return domainArray;