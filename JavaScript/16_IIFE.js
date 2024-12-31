// Immediately Invoke Function Expression (IIFE)

// it is used to remove the pollution of globle socpe variable. and it is used to immediately execute a funtion. ()() is used.


(function a (){
    //Name IIFE = which have a name it has a.
    console.log('DB connected');
    
})(); // Here semicolon is imp!!!

// we a also use IIFE in arrow function.

((name)=> (console.log(`${name} DB is connected`)))("Aman") // Unname IIFE.
