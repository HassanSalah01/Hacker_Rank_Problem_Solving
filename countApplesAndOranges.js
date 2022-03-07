function countApplesAndOranges(s,t ,a, b, apples, oranges) {
    let appless = pushing(a,apples);
    let orangess=pushing(b,oranges);
    return[checking(s,t,appless),checking(s,t,orangess)];

}
function pushing(a,arr){
    let x =[];
    for(let i of arr){
        x.push(i+a);
    }
    return x ;
}
function checking(s,t,arr){
    let count = 0 ;
    for (let i of arr){
        if(i >=s && i<=t){
            count++;
        }
        
    }
    return count;

}
console.log(countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4]));