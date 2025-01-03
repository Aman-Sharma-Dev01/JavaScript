// if-else statement is used to check the condition.

let temp = 40
let userName = "aman"

if(temp <= 40){
    console.log("weather is cold");
    
}
else{
    console.log("weather is hot");
}

if(userName === "aman"){
    console.log("welcome aman");
    
}

// imp operators : < , > , <= , >= , === , == , != , !==

// else-if : used to check multiple conditions.

let age = 17

if(age === 17){
    age + 1
    console.log("you are underage but you can drive");
    
} else if(age >= 18){
    console.log("you can drive");
    
}
 else if(age < 18){
    console.log("you cannot drive");
    
}

// more operator

let login = true
let payment = true
let googleAcc = false 
let gmailAcc = true

if (login && payment){ // all condition must be true
    console.log("allowed to buy");
    
}

if (googleAcc || gmailAcc){ // atleast one condition should be true
    console.log("Can log in");
    
}

// how to check array and object is empty or not.
let arr1 = []
if(arr1.length === 0){
    console.log("array is empty");
    
}

let obj1 = {}
if (Object.keys(obj1).length === 0) {
    console.log("object is empty");
    
}
