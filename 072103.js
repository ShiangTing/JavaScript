var list = [
    { Type:'喝的',Item:'啤酒'},
    { Type:'喝的',Item:'汽水'},
    { Type:'吃的',Item:'燒烤'},
    { Type:'吃的',Item:'火鍋'},
    { Type:'吃的',Item:'冰淇淋'},
]
//find--找到第一筆要的結果
var item1 = list.find(x=>x.Type=='吃的');
console.log(item1);
var item2 = list.filter(x=>x.Type =='吃的');
console.log(item2);

//indexof傳的是物件
var p1 = list.indexOf(x=>x.Item=='冰淇淋');
console.log(`冰淇淋位置${p1}`);

var findObj = list.find(x=>x.Item=='冰淇淋');
var item3 = list.indexOf(findObj);
console.log(item3);

var p2 = list.findIndex(x=>x.Item=='冰淇淋');
console.log(p2);


//把list按照12生肖按照順序排好
var list2 = ['兔','鼠','蛇','馬','豬','羊'];

var item4 = list2.sort(function(a,b){
    const zox = ['鼠','牛','虎','兔','龍','蛇','馬','羊','猴','雞','狗','豬']
    return zox.indexOf(a)-zox.indexOf(b)
})
console.log(item4);

var item5 = list.sort(function(a,b){
   // debugger
    const food = [ '吃的','喝的']
    return food.indexOf(a.Type)-food.indexOf(b.Type);
    // if(list.Type=='吃的')
    // return -1;
    // if(list.Type=='喝的')
    // return 0;
})
console.log(item5);

var item6 = list.map(x=>x.Item);
console.log(item6);

//產出新結果[{ProductName:'燒烤'}...]
var item7 = list.map(function(obj){
    var rObj = {};
    rObj['ProductName']=obj.Item;
    return rObj;

})
console.log(item7);

//return前的括號是function
var item8 = list.map(x=>{return{ProductName:x.Item}})
console.log(item8);

//自訂義groupby
Array.prototype.groupBy = function(prop){
    return this.reduce(function(groups,item){
        const val = item[prop]
        groups[val] = groups[val] ||[]
        groups[val].push(item)
        return groups
    },[])
};
var item9 = list.groupBy('Type')
console.log(item9);