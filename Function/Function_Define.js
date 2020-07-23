//Ex1

function RectArea(height,width){
    return area = height*width;
}

//const 可以讓function產生出的變數不被改變
const getRectArea = function(height,width){
    return area = height*width;
}

//Lamda表達式
const FullName = (lastName,FiretName) =>{return lastName +FiretName;}
console.log(FullName("Kathy","Lin"));




const computeRectArea = new 
    Function('height','width','return height*width');

console.log(computeRectArea(9,7));
console.log(computeRectArea.name);

const sum = new Function('x','y','{return x + y}')