// let bmi = function(height,weight){
//     weight/(height/100)
// }

let bmi = (height,weight)=>{
    return weight / Math.pow((height/100), 2);

}
console.log(bmi(168,55));