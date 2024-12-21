/*********************************** String ***********************************/
let name = "Aman Sharma"
let age = 20
 //we should use ${} rather than the + .
console.log(`My name is ${name} and i am ${age} years old.`);

let details = "Hello World, My name is Aman Sharma and i am student of Btech"

//Some important Functions of String.

console.log(details[8]); // [] is used to access the key value by the in inde value of the string.
console.log(details.length); // .length is used to print the length of the string.
console.log(details.trim()); // .trim() is used to trim the extra space from the start and from the end there are two more funtion trimStart() and trimEnd().
console.log(details.slice(5)); // .slice() is used to cut a specific part of the string for example i give the value 6 and 9 so this function will trim all the other part of the string, and print only the value of 6 to 9, we can use negative values.
console.log(details.indexOf(`a`)); // .indexOf() is used to find the index value of any char in the string
console.log(details.substring(6,9)); // used to create a substring,we cannot use negative value in substring function
console.log(details.replace(`Aman`,`Navya`)); //.replace() function is used to replace any word and symbol in a string.
console.log(details.includes(`Aman`)); // .includes() function is used to check a word or a letter is present in the string or not it will only give the output in boolean values.
