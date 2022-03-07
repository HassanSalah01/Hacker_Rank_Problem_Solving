// const keyboards = [50,40,60];
// const drives = [5,8,12];
const keyboards = [4];
const drives = [5];

function getMoneySpent(keyboards, drives, b) {
    let sum  = -1;
    for (let i of keyboards){
        for(let j of drives){
            if(i+j <= b && i+j > sum ){
                sum =i+j
            }
        }
    }
    return sum

}
(() => {
    getMoneySpent(keyboards,drives,5);


})(){\rtf1}
