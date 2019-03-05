//Two array are called similar if once can be obtained from another by swapping at most one pair of elements in one of the arrays.
//Given two arrays a and b, check whether they are similar.

//ex: for a = [1,2,3] and b = [1,2,3] -->true
//ex: for a = [1,2,3] and b = [2,1,3] -->true
//ex: for a = [1,2,2] and b = [2,1,1] -->false

const areSimilar = (a,b) => {
    const c = [];
    let d = [];
    if(a.toString() === b.toString()){
        return true;
    }
    for (let i = 0 ; i < a.length ; i++){
        if(a[i] !== b[i]){
            c.push(a[i]);
            d.push(b[i]);
        }
    }

    d = d.reverse();
    if (c.length === 2 && (c.toString() === d.toString())){
    return true;
    }
    return false;
}