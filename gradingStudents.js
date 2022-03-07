let std = [73,67,38,33];

function gradingStudents(grades) {
    let newArr = [];
    for(let x of grades){
        if(x <38){
            newArr.push(x); 
        }else if( div(x) - x >=3){
            newArr.push(x);
        }else if( div(x) - x <3){
        newArr.push(div(x));
    }
    }
    console.log(newArr);
}

gradingStudents(std);

function div(x){
    while(x%5!=0){
        x++;
    }
    return x ;
}
