const accountNo = 88266
let userName = "Aman Sharma"
var userAdd = "delhi"
loctn = "faridabad"

/*So, there are many way to declare a variable in javaScript but we mostly use (const and let),
we use const when we do not want our data to change,
and let is normally used to declare variable.
we cannot use var because of issue in block scope and functional scope
and we can also declare a variable by just name but this is not a good practice thats way we mainly use const and let to declare a variable.
*/

//Now, we try to override means change and print the value of above variables.

// accountNo = 27177 /Not allowed because we cannot change the value of a const variable.
userName = "Navya"
userAdd = "Haryana"
loctn = "Delhi"

console.log(loctn); // console.log() is used to print the output
console.table([accountNo, userName, userAdd , loctn]) /*console.table([]) is used to print the output in the form of table. there is sqare backet is important under the normal backet.*/
