// const tinderUser = new Object();
const tinderUser ={ }
tinderUser.id = 123;
tinderUser.name = "Kamal"
//console.log(tinderUser.name);

const realUser ={
    email:"kamal@gmail.com",
    fullName : {
        firstName:"Asutosh",
        lastName: "biswal"
    }
}
//console.log(realUser.fullName.firstName);

let obj1 = { 1:"a", 2: "b"}
let obj2 ={3:"c", 4:"d"}
//let obj3 = Object.assign({} ,obj1,obj2);
let obj3 ={...obj1, ...obj2}
console.log(obj3);