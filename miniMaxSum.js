function miniMaxSum(arr) {
    let arrr = arr.sort(function(a, b){return a - b});
    console.log(arrr);
    let min = ret(arrr,0,4);
    let max = ret(arrr,arrr.length-4,arrr.length);
    return console.log(min , max);

}
function ret(arr, f, len){
    let  sum = 0 ;
    for(let i =  f ; i < len ; i++){
        sum+=arr[i];
    }
    return sum ;
}
console.log(miniMaxSum([7 ,69 ,2 ,221 ,8974]));