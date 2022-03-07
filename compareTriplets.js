function compareTriplets(a, b) {
    let numb1 = 0, numb2 = 0 ;
     for(let i = 0 ; i <a.length ; i++){
         if(a[i]>b[i]){
             numb1++;
         }else if(a[i]<b[i]){
             numb2++;
         }
     }
     return[numb1,numb2];
 }