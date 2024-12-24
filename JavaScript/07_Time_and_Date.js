/***************************** Time and Date ********************************/

let todayDate = new Date() // used to print the current date. we need to make the instance of date object.
console.log(todayDate); 
console.log(todayDate.toString()); // used to convert the given output into String formate.
console.log(todayDate.toLocaleString()); // used to convert the given output into LocaleString formate.
console.log(todayDate.toISOString()); // used to convert the given output into ISOString formate.




let dateTime = new Date(`2024-12-24`) // used to give a specific date under String. 
let dateTime1 = new Date(2004 , 7 , 16 , 5 , 30).toLocaleString() // used to give a specific date in array , index is start from 0.
console.log(dateTime1);


let timestamp = Date.now() // used to get the time Stam of current date in milliseconds.
console.log(timestamp);

console.log(Math.round(dateTime.getTime()/1000)); 



//Note more things left to learn.........!!!!


