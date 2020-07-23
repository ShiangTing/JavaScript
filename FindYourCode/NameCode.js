function fullCharCode(names){
    if(typeof names ==NaN || /^\s+$/.test(names)){ //names包含空白
        console.log("請輸入中文名字");
    }
    else if(/\s/.test(names)){
        console.log("請輸入不含空白的中文名字");
    }
    else 
    for(let g=0; g<names.length; g++){
         var answer = names.charCodeAt(g);
         console.log(answer);
      
         var trans = answer.toString().split("");
       
         console.log(trans);
  
}

}

let testArr = ['王大立', '王 大立', ' ', ''];

testArr.forEach(function(item) {
    console.log('--', item);
    fullCharCode(item);    
})
//fullCharCode("王大立");

// 1.檢查不得為空白或非String型別   Typeof
// 2.一次傳遞完整姓名至function參數   
// 3.將結果儲存成Array陣列   
// 4.顯示Code