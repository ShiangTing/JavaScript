var person = {
    name : "Kevin",
    age:32,
    height:175,
    weight:64,
    bmi:function(){
        return this.weight / ((this.height/100) **2);
    }
};
delete person.name;
console.log(person);
console.log(person.bmi());

var person2 = {
    name:"Sharon",
    gender:"female",
    phone : {
        Home:"Kaohsiung",
        Office:"Taipei",
        Mobile:0970396062

    },
};
var person3 = {
    name:"John",
    gender:"female",
    phone : {
        Home:"Kaohsiung",
        Office:"Taipei",
        Mobile:0970396062

    },
};
var person4 = {
    name:"David",
    gender:"female",
    phone : {
        Home:"Kaohsiung",
        Office:"Taipei",
        Mobile:0970396062

    },
};
var memberShip=[person2,person3,person4];
console.log('---------------------')
console.log(memberShip.find(x=>x.name=="David"));


var countryObject = {
    Taiwan:[
       { name:"Taiwan"},
       { confirmed:455},
       { recorver: 440},
       { died:7}],
       
    UnitedState:[
       { name:" United State"},
       { confirmed:3970000},
       { recorver: 1160000},
       { died:1440000}],
    
    Brazl:[
       { name:" Brazl"},
       { confirmed:2170000},
       { recorver: 1470000},
       { died:81597}],

}
console.log(countryObject);
//console.log(person2.gender);