function kangaroo(x1, v1, x2, v2) {
    let WillMeet = "";
    if((x2-x1)%(v1-v2)==0 && (v1>v2)){
        WillMeet="YES";
    }else{
        WillMeet = "NO";
    }
    return WillMeet;
}