let ar = [1000000001 ,1000000002, 1000000003 ,1000000004 ,1000000005]
function aVeryBigSum(ar) {
    let add = 0 ;
    for (let i of ar){
        add+=i;
    }
    return add ;
}
console.log(aVeryBigSum(ar));