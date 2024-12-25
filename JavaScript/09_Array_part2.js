/********************** Array 2 **********************/

let marvel_heros = ["Ironman" , "spiderman" , "thor" , "hulk"]
// console.log(marvel_heros);

let dc_heros = ["Superman" , "Batman" , "flash"]
// console.log(dc_heros);

// marvel_heros.push(dc_heros) // this will insert the dc_heros array into marvel_heros.
// console.log(marvel_heros [4][1])

let all_heros = marvel_heros.concat(dc_heros) // this will take the elements of both array and make another array named all_heros.
// console.log(all_heros);

let allnew_heros = [...marvel_heros , ...dc_heros] // this is called spread method it is also used to all both array.
console.log(allnew_heros);


let newArray = [1 , 2 , [ 3 , 4 ] , 6 , [2 , 4 , 5 ,[1 , 4 , 5 ] , 2] , 9 ]

let comb = newArray.flat(Infinity) // flat method is used to combine all inside array and make a single array of all the elements.
console.log(comb);


/********************** Conversion of other data in array ************************/

let con = Array.from("aman") // used to covert a String or object in array.
console.log(con);

console.log(Array.isArray("aman")); // used to check a data is array or not.

let score = 100
let score1 = 200
let score2 = 300 

 let allarray = Array.of(score , score1 , score2) // is used to make a array from a set of data elements.
console.log(allarray);
