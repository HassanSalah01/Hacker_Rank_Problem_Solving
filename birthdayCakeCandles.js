function birthdayCakeCandles(candles) {
    let can = candles.sort(function(a, b){return a - b});
    let tall = can[can.length-1];
    let sum = 0 ;
    for(let x of can){
        if(x==tall){
            sum++;
        }
    }
    return sum ;

}
console.log(birthdayCakeCandles([4,4,1,3]));