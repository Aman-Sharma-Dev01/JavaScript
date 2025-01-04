//For of loop
//We can use For of loop for values printing/for iterating over values directly over Strings & Array.

let arr1 = [1,2,3,4,5]
for (const val of arr1) {
    // console.log(val);
    
}

let srt1 = "hello world"
for (const val of srt1) {
    if(val===" "){
        continue;
    }
    // console.log(val);
}


// for in loop:- We can use For in loop for values printing/for iterating over values by Indexes/Keys over Objects and Arrays & Strings .

for (const key in arr1) {
    // console.log(`${key} value is: ${arr1[key]}`);
}

let obj1 = {
    langName: "javaScript",
    langExt: "js",
}

for (const key in obj1) {
    // console.log(`key is ${key} and value is ${obj1[key]}`);
    
}

//for each loop:- We Can Use forEach loop For iterating {{Over Arrays}} and its values as well.

let superHero = ["flash", "superman", "batman", "hulk"]
let superHero2 = ["flash", "superman", "batman", "hulk"]

superHero.forEach(function (item){
    // console.log(item);
    
})

//we can use arrow function.
// superHero.forEach((item)=>(console.log(item)))
superHero.forEach( (item , keys , array) => { //for each loop have value keys and complete array
    // console.log(item,keys,array);
    
})

// we can also use pre-defined function.
function loopForArray (item) {
    console.log(item);
}

superHero.forEach(loopForArray)
