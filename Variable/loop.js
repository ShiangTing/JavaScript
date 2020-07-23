// function loop1(){

//     for (var i = 0;i<3;i++){
//         console.log(i);
//     }
//     console.log(i);
// }


function loop1()
{
 for (var i = 0; i < 3; i++) {
 console.log(i)
 }
 console.log(i);
}

//用let的時候 整個for迴圈是不可視的
function loop2()
{
    for (let i = 0; i < 3; i++) {
    console.log(i)
    }
    console.log(i);
}
loop1();
console.log('.'.repeat(60));
loop2();

// function Name(){
// var lady='Rose';
// {
//  var lady = 'Mary';
//  console.log(lady);
// }
// console.log(lady); 
// }
// Name();