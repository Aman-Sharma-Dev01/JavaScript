/*********************** Objects *************************/
let sym = Symbol("Key")
const user1 = {
    name : "Aman" ,
    "full name" : "Aman Sharma" ,
    age : 20 ,
    location : "Faridabad" ,
    "email" : "aman@gmail.com" ,
    isLoggedin : true ,
    lastLoginDays : ["Mon" , "Wed" , "Fri" , "Sat"] ,
    [sym] : "key1"

}

// console.log(user1);
console.log(user1.name); // not a good practice.
console.log(user1["full name"]); // Good practice.
console.log(user1[sym])

user1.email = "aman@new.com"
// Object.freeze(user1) // used to freeze the object and we cannot change any value of the object.
user1["full name"] = "king"
console.log(user1["full name"]);

user1.greeting = function(){
    console.log(`Hello world my name is ${this.name} and i am ${this.age} years old.`); // here this is used to refer the property of object.
    
}

console.log(user1.greeting());



