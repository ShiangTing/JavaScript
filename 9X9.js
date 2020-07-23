
// for(var i=1;i<=9;i++){
//     for(var j=1;j<=9;j++){
//         var answer = i*j;
//         console.log(`${i}x${j} = ${answer}`);
//     }
//     console.log("*".repeat(60));
// }

let nine = [];
//console.log(`employee.${prop}:${employee[prop]}`)
for(var i=1;i<=9;i++){
    for(var j=1;j<=9;j++){
        var answer = i*j;
       // console.log(`${i}x${j} = ${answer}`);
    nine.push(answer);
   
    }
   // console.log("*".repeat(60));
  
}
nine.sort(function(a,b){return a -b;});
console.log(nine);