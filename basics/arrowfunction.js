const user ={
    userName: "Kamal",
    price: 989,
    welcomeMessage: function(){
        console.log(`${this.userName} ,Welcome to the website`)
    }
}
// user.welcomeMessage()
// user.userName="Sam"
// user.welcomeMessage()

const userOne =()=>{
  let userName= "Ashu"


}
userOne()
// explicit arrow function
// const addTwo =(num1, num2)=>{
//  return num1+num2;
// }
// implicit function
//const addTwo =(num1,num2)=>(num1+num2)
const addTwo =(num1,num2)=>({username:"Kamal"})
console.log(addTwo(3,5))