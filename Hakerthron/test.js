
 let numberArray = [ 1, 2, 3, 4, 5, 6, 7, 8,9]
while(invertion%2!=0){
    numberArray.sort(() => Math.random() - 0.5);
    console.log(numberArray)
    for(let i=0;i<numberArray;i++){
        for(let j=i+1;j<numberArray;j++){
        if(numberArray[j]<numberArray[i]){
            invertion++;
        }
    }
    }
    console.log(numberArray)
}
