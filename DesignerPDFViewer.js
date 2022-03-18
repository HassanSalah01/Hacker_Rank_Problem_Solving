const h = [1,3, 1 ,3, 1 ,4 ,1 ,3 ,2 ,5, 5, 5 ,5, 5,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5 ,5]
var word = "abc";
function designerPdfViewer(h, word) {
    const newArr =[];
    for (let n of word){
        newArr.push(h[n.charCodeAt(0) - 97]);
    }
        return(Math.max(...newArr)*word.length);
}
