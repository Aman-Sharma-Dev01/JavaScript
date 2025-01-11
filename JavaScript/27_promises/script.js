const promiseOne = new Promise(function(resolve , reject){
    //Do an Async task
    // DB calls , network , cryptography
    setTimeout(function(){
        console.log('async function is executed');
        resolve()
    },1000)
})
promiseOne.then(()=>{
    console.log('promise is consumed');
})

//another syntax
new Promise((resolve , reject)=>{
    setTimeout(()=>{
        console.log('Second aysn task is completed');
        resolve()
    },1000)
}).then(()=>{
    console.log('promise 2 is consumed');
})

//another promise
 const promiseThree = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve({username: "aman", id:"123"})
    },1000)
 })
 promiseThree.then((response)=>{
    console.log(response);
 })

//another promise
const promiseFour = new Promise((resolve , reject)=>{
    let error = false
    if(!error){
        resolve({username:'Aman', password:'321'})
    }
    else{
        reject('E: Something went wrong')
    }
}) 
promiseFour.then((response)=>{
    console.log(response);
    return response.username
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

// using async await

let promiseFive = new Promise((resolve , reject)=>{
    let error = true
    if(!error){
        resolve({
            username: 'javaScript' , id:'231'
        })
    }
    else{
        reject('Something went wrong')
    }
})

async function consumeResponce() {
    try {
        const response =  await promiseFive
        console.log(response);  
    } catch (error) {
        console.log(error);
    }
}
consumeResponce();



// use of async await

// async function myApiData(){
//    try {
//     const response = await fetch('https://api.github.com/users/Aman-Sharma-Dev01')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log('E:' + error);
//    }
// }
// myApiData();




// use of .then and .catch

fetch('http://api.github.com/users/Aman-Sharma-Dev01')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
}).catch((error)=>{
   console.log('E:' + error);
    
})