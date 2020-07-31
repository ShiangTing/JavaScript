const promise1 = new Promise(function(resolve, reject) {

    let a=1;
    let b =2;
    let c=3;

    resolve("Success!");
    reject("Fail...");
});
promise1.then(function(msg){
    console.log("程式觸發了成功事件:" + msg);

},function(ex){
    
    console.log("程式觸發了失敗事件:" + ex);
});