const pi = "3.1415962";
console.log(pi+7);
console.log(parseInt(pi) + 7);
console.log(parseFloat(pi+7));
console.log(pi*7);
console.log(pi/7);

//var不受Block Scope約束 而其是全域變數
var x=1;
let y=2;
const z=3;
//Block Scope
{
    var x=3;
    let y=6;
    const z=9;
    console.log(x);
    console.log(y);
    console.log(z);
}
    console.log(x);
    console.log(y);
    console.log(z);
