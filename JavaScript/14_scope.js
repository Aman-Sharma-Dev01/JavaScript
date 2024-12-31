function twonum() {
    let name = "aman"
    function numtwo(){
        let name2 = "navya"
        console.log(name)
    }
    numtwo()
    // console.log(name2) // A parent scope cannot access the variable of its child scope.
}
twonum()


//another example...

if (true){
    let name = "navya"
    if(name === "navya"){
        let name2 = "aman"
        console.log(name);
        
    }
    // console.log(name2) // A parent scope cannot access the variable of its child scope.
}


/********************** interesting case ***********************/

console.log(addone(5)); // this syntax will execute .

function addone (num1) {
    return num1 + 1
}



// console.log(addtwo(5)); // this syntax will not execute.

let addtwo = function(num2){
    return num2 + 2
}