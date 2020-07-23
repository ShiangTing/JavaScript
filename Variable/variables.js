console.log(typeof x);
console.log(x===undefined);
var x =5;


var product = "iPhone";
(function(){
    console.log(product);
    var product = "Android";
})();
console.log(product);

var product2 = "Sony";
(function(){
    console.log(product2);
    var product2 = "uhknow";
})();