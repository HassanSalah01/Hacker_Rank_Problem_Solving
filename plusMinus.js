let arr = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
    let size = arr.length;
    let pos  = 0 ;
    let neg  = 0 ;
    let z  = 0 ;
   for(let x of arr){
       if(x >=1){
           pos++;
       }else if(x<0){
           neg++;
       }else{
           z++;
       }   
   }
   return `${(pos/size)}
   ,${(neg/size)}
   ,${(z/size)}`;
   
}
console.log(plusMinus(arr));