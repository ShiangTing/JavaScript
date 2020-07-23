// nn
//雙等號與三等號的差異
//雙等號是數值相等 三等號則是物件相等，若兩者在記憶體中物件不同責被判定不同
// console.log(1===true);//Data Type 無轉型

// var person = null;
// person;
// console.log(person);

// var person;
// person;
// console.log(person);


// var person = null;
// console.log(typeof person);
// console.log(typeof (person));

// function checkValue(value){
//     if(value === undefined){
//         return 'undefined value!未定義的值';
//     }
//     return '傳入值為:' + value;
// }
// let name;
// let nickname = 'super man';
// console.log(checkValue(nickname))


// var num1 = BigInt.asIntN(53,98746385n);
// console.log(num1);
// console.log(typeof num1);
// var $log = function(value){
//     console.log(value);
// }
// var name1 = "Kevin";
// var name2 = new String("Kevin");

// console.log(name1);
// console.log(name2);
// console.log(name1==name2);
// console.log(name1===name2);
// console.log(typeof name1);
// $log(typeof name2);

// let longString = "aaaa,bbbb,cccc\
// eeee,ffff,hhhh";
// console.log(longString);
// //charAt 為索引值
// for(var i = 0;i<longString.length;i++){
//     console.log(longString.charAt(i));
// }
const age = '3';
console.log(age.padStart(5,'0'));
console.log(age.padEnd(4,'0'))