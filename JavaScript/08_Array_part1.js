/*************************** Array *************************/

// Array in JavaScript is a collection of similar or different type of elements. its with the starting index 0 .

let myArray = [0 , 1 , 2 , 3 , 4 , 5]
// console.log(myArray)
// console.log(myArray[3]); // used to print a specific element of the array using array index.

let myArray2 = ["aman","navya", 1 , 2 ]
// console.log(myArray2);

let myArray3 = new Array(9 , 8 , 7 , 6)
// console.log(myArray3);

/********************** Array Methods **********************/

// console.log(myArray.push(6)); // used to add a element at the end of the array.
// console.log((myArray.pop())); // used to remove a element from the end of the array.

myArray.push(6) // used to add a element at the end of the array.
// console.log(myArray);

myArray.pop() // used to remove a element from the end of the array.
// console.log(myArray);

// console.log(myArray.includes(4)); // used to check a element is present in the array or not.
// console.log(myArray.indexOf(5)); // used to check the index value of a element in array.

let myn1 = myArray.join() // it is used to convert a array into String.
// console.log(myn1);

myArray.unshift(4) //it is used to add a element at the starting of the array.
// console.log(myArray);

myArray.shift() // it is used to remove the first element of the array.
// console.log(myArray);

// slice and splice method.

let newArray = myArray.slice(1 , 3)
// console.log(newArray); // it is used to cut a array from a specific part. it does not include boundries.

let newArray2 = myArray.splice(1 ,3) // it is also used to cut a specific part of array and it also include the boundies.
//splice remove the cutted part from the original array.
// console.log(myArray);
// console.log(newArray2);











