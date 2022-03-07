let time = "12:05:45PM";
function timeConversion(s) {
    let hours = ((s[0]+s[1]));
    let timeZ = s[s.length-2]+s[s.length-1];
    if(hours==12 && timeZ=="AM"){
        hours = "00";
    }else if(timeZ =="PM"&& hours!=12){
       hours =Number(hours);
        hours+=12;
    }
    return `${hours}:${s[3]}${s[4]}:${s[6]}${s[7]}`;
}
console.log(timeConversion(time));