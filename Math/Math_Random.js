console.log(Math.random());

console.log(Math.floor(3.1415962));
console.log(Math.floor(-3.1415962));

function getRandom(min,max){
    return Math.floor(Math.random()*max+min);

}
console.log(getRandom(1,100));

for(let i=1;i<=100 ;i++){
    let number = getRandom(1,100);
    console.log(number);
}