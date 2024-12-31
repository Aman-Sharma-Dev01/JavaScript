/************* This ***************/

let login = {
    username: "Aman",
    price: 1999,

    greething: function(){
        console.log(`${this.username} , Welcome to the website`)  
        // console.log(this); // this is used to refer the current context.
         
    }
}
// login.greething()
// login.username = "navya"
// login.greething()

// console.log(this); 


// function hello(){
//     let hello = "hello"
//     console.log(this); // we cannot use this in function
    
// }
// hello()

/*********** Arrow Function ***********/

//normal function function (){}

//arrow function () => {} , () => ()

let addTwoNum = (num1 , num2) => {
    return num1 + num2
}
console.log(addTwoNum( 4 , 5));

// or we can used normal backet also. but in normal backet we do not need to use return.

let addThreeNum = (num1, num2 , num3) => (num1 + num2 + num3)
console.log(addThreeNum(1 ,2 , 3))

//object and array declare in arrow funtion.

let objFun = () => ({username:"aman" , age:20}) //object declare in arrow function
console.log(objFun());

let arrFun = () => ([100 , 200 , 300])
console.log(arrFun());
