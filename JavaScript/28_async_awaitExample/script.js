// async-await is used to name make a asynchronous code to synchronous.
let obj = {
   "userId": 721,
    "id": 1,
    "title": "kuch-nahi",
    "completed": true
}

async function makeRequest() {
   let response = await fetch('https://jsonplaceholder.typicode.com/todos')
   const data = await response.json()
   console.log(data);
}

async function postReq (){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers:{
            "content-type": "application/json charset=UTF-8"
        }
    })
    const data = await response.json()
    console.log(data);
    

}
async function call() {
    postReq();
    // makeRequest();
}
call();

// INCOMPLETE CODE............