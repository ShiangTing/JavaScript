// var x =1;
// var x;
// function init(){
//     var x = 0;
//     console.log(x);//0
// }
// init();
// console.log(x);

// //Ex2
// var y =1;
// var y;
// function init(){
//     y = 0;
//     console.log(y);//0
// }
// init();
// console.log(y);

//Ex3
var x = 1; //global
{
 var x = 3; //global x用永遠變成3
 function setValue() {
 var x = 5;
 console.log(x); //3
 }
 console.log(x);//5

setValue();
console.log(x); //3
}
//Ex4
var x = 1;
var x;
//var n;
n = 5;
function init() {
 var x = 0;
 var y = 2;
 var z = 3;
 n = -1;
 console.log(x);//0
}
init();
console.log(x);//1
// console.log(y);//nan
// console.log(z);//nan
console.log(n); //-1
