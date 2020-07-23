// for(let i =0;i<255;i++){
//     console.log(i +"," + String.fromCharCode(i));
// }
// var allCode=""
// for(let i = 33;i<65536;i++){
//     allCode += String.fromCharCode(i)
// }
// console.log(allCode);

// var name = "陳";
// var nameCode = string.fromCharCode(2);
// console.log(nameCode);
// var a = "ABC".charCodeAt(0);
// var b ="陳".charCodeAt(0);
// var c= "湘".charCodeAt(0);
// var d = "婷".charCodeAt(0);
// console.log(c);
// console.log(b);
// console.log(d);



// var name = "陳湘婷";
// name.forEach(element => {
//     console.log(element.charCodeAt(0));
    
// });



// names.forEach(element => {
//     console.log(element);
// });
var names = "陳湘婷";
for(let g=0;g<3;g++){
    var answer = names.charCodeAt(g);
    console.log(answer);
}


function getCharCode(char)
{
    var answer = char.charCodeAt(0);
    console.log(answer);
}
getCharCode("陳");

function getCharCode2(char){
    for(var i = 33;i<65536;i++){
        if(char == String.fromCharCode(i))
        console.log(i);
        // allCode += String.fromCharCode(i)
    }
}
getCharCode("陳");
getCharCode("湘");


//老師的
function getCharCode2(char){
    for(var i = 33;i<65536;i++){
        if(char == String.fromCharCode(i))
        return i;
        // allCode += String.fromCharCode(i)
    }
}
console.log(getCharCode("陳"));