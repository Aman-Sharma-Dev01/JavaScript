// let anObj = new Object() // it is a singleton object
// anObj.name = "aman"
// console.log(anObj.name);

let instagramUser = {} // non singleton object.
instagramUser.Id = "123abc"
instagramUser.name = "Aman"
instagramUser.isLoggedIn = true

console.log(instagramUser);


//nested object is possible 

const anotherapp = {
    Id : "456def" ,
    name : {
        username : {
            fullname : {
                firstname : "Aman" ,
                lastname : "Sharma"
            }
        } 
    }
}

console.log(anotherapp.name.username.fullname);

let obj1 = { 1 : "a" , 2 : "b"}
let obj2 = { 3 : "c" , 4 : "d"}

let obj3 = Object.assign(obj1 , obj2)
console.log(obj3);

// We can also use spread method to cobime 2 or more objects.

let obj4 = {...obj1 , ...obj2}
console.log(obj4);

let userdata = [
    {
        userid : 1 ,
        username : "aman"
    },
    {
        userid : 1 ,
        username : "aman"
    },
    {
        userid : 1 ,
        username : "aman"
    },
    {
        userid : 1 ,
        username : "aman"
    }
]

console.log(userdata[1].userid)

/************** Imp Methods **************/

console.log(Object.keys(instagramUser)); // it will print all the keys of the object.
console.log(Object.values(instagramUser)); // it will print all the values of the object.
console.log(Object.entries(instagramUser)); // it will give all the keys and value saperated in the array.

console.log(Object.hasOwnProperty('name'));


/************************* De-Structure **********************/
//  Object Destructuring is the syntax for extracting values from an object property and assigning them to a variable.
let emp = {
    emp_name : "aman" ,
    emp_id : "123abc" ,
    project : "none"
}

let {emp_id : id } = emp

console.log(id);
