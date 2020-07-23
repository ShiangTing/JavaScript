var obj = new Object();
var object = {};

var person = {
    name:"Kevin",
    email:"kevin@gmail.com",
    phone:"0922-155342"
}

console.log(`${person.name},${person.email},${person.phone}`);
console.log(`${person["name"]},${person["email"]},${person["phone"]}`);


var employee ={
    name:"Kevin",
    email:"kevin@gmail.com",
    title:"Devoloper",
    phone:{
        home:"(03)366-4946",
        office:"(03)342-5178",
        mobile:"0922-155342"
    }
}
console.log(employee.phone.home + "," +employee['phone']['mobile'])

for(const prop in employee){
    console.log(`${prop}`);
}
for(const prop in employee){
    console.log(`employee.${prop}:${employee[prop]}`);
}