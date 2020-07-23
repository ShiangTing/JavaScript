//Symbol 是一種特殊的、不可變的資料型別，可以作為物件屬性的識別符號使用，表示獨一無二的值。
let Sym1=Symbol("Sym");
let Sym2 = Symbol("Sym");
console.log(Sym1==Sym2);
console.log(Sym1===Sym2);
console.log(typeof Sym1);
console.log(Sym1.toString());


let sym = Symbol('foo')
let obj = {[sym]: 1}
console.log(obj[sym])             // 1
console.log(obj[Object(sym)])  