//for loop

for (let i = 1; i <= 10; i++) {
    // console.log(i);
}


// nested for loop
for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value is ${i}`);
    
    for (let j = 0; j <=10; j++) {
        // console.log(`value of inner loop is ${j}`);   
    }
}

// 1 to 10 table using for loop.

for (let i = 1; i<=10; i++ ){
    // console.log(`Table of ${i}`);

    for(let j = 1; j<=10; j++ ){
        let table = j*i
        // console.log(`${i} * ${j} = ${table}`);
        
    }
    
}


let arr1 = ["ironman", "spiderman", "hulk", "thor" ]

for (let i = 0; i < arr1.length; i++) {
    // console.log(arr1[i])
    
}

// break and continue keyword
//break
for (let i = 1; i <= 10; i++) {
   if(i === 5){
    console.log(`5 is detected`);
    break; // it will break the loop when the conditon is ture.
   }
   console.log(i); 
}

// continue
for (let i = 1; i <= 10; i++) {
    if(i === 5){
     console.log(`5 is detected`);
     continue; // it will skip one conditon in the loop when the conditon is ture.
    }
    console.log(i); 
 }