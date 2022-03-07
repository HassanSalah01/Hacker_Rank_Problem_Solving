let arr =[11, 2, 4,
    4 ,5 ,6,
    10 ,8 ,-12]
function diagonalDifference(arr) {
    return Math.abs((arr[0]+arr[4]+arr[8])-(arr[2]+arr[4]+arr[6]));
}
console.log(diagonalDifference(arr));