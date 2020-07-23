var array1 = [];
var array2 = new Array();
var array3 = new Array(10);

var com = new Array('CPU','DRAM','SSD');

var products = [

    ['CPU','DRAM','SSD','RARM'],
    ['BMW','Benz','Audi','Lexus']



]

var Cars =  ['BMW', 'Benz', 'Audi', 'Lexus'];
for(let item of Cars){
    console.log(item);
}
var Person = ['John', 35, 'john@gmail.com'];
Person.forEach(function(item,index){
    console.log(index,item,typeof item);
})

var Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
var Prices = [280, 320, 250, 210]; 
var PricesWithTax = Prices.map(p=>p*1.05);
console.log(PricesWithTax);

console.log('總金額:' + Prices.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
})
);

var Computer = ['CPU', 'DRAM' , 'SSD', 'Mouse'];
var comp = new Array('CPU', 'DRAM' , 'SSD', 'Mouse');
var Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
var Prices = [280, 320, 250, 210];
var products = Computer.concat(Cars);
console.log(products);

var prod = [...Computer,...Cars];
console.log(prod);

Computer.push.apply(Computer,Cars);
console.log(Computer);


var array1 = [...array(9).keys()].map(x=>(x+1)*10);
console.log(array1);