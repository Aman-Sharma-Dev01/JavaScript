/********************** Function ***********************/
//Functions in JavaScript are reusable blocks of code designed to perform specific tasks. 
//They allow you to organize, reuse, and modularize code. It can take inputs, perform actions, and return outputs.
function sayMyName() {
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName()

//with parameter and arguments.

function addTwoNum(num1, num2) { //here num1 and num2 are the parameters.
    return num1 + num2
}

// console.log(addTwoNum(2, 3)) // here 2 and 3 are the arguments.

//another example.

function userLoggedInMSg (username){
    if(username === undefined){ //Here i am using if condition for , if the argument is empty then it will print please enter yoyr name.
        console.log("please enter your name...");
        return
    }
    return `${username} is just logged in..!`

}
console.log(userLoggedInMSg("aman"))