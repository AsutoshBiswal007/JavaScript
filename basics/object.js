// object literals
const mySym = Symbol("key1")
const jsUser = {
    name : "Ashu",
    "full name": "Ashu Biswal",
    [mySym] : "my key 1",
    age : 23,
    location: "Bhubaneswar",
    isLoggedIn : false

}
console.log(jsUser.name);

console.log(typeof jsUser[mySym]);
jsUser["full name"]= "Kamal Biswal"
// Object.freeze(jsUser)
jsUser["full name"]="BARlight"
console.log(jsUser["full name"]);
jsUser.greeting = function () {
    console.log("Hello Js Users")
}
jsUser.greetingtwo = function () {
    console.log(`Hello JS USER, ${this["full name"]}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingtwo());