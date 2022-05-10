let normalArr = [5,1 ,2 ,3 ,4, 4, 3, 2, 1, 3, 4];
let reads 

function solution(nA){
    let sA =  [...new Set(normalArr) ].sort(function(a, b){return a - b});
    let arrNum = [] 
    for (let i of sA){
        let count = 0
        for (let j of nA){
            if(i==j){
                count++;
            }
        }
        arrNum.push(count)
    }
// console.log(Math.max(...arrNum))
return sA[arrNum.indexOf(Math.max(...arrNum))];
}

console.log(solution(normalArr))