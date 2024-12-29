// rest operator
function cartValue(...items){ // So here (...) is the rest operator which is used to add all the given argument and make a array of it.
    return items
}

console.log(cartValue(100,200,500,1000))

// using object in the function.
let itemDetails = {
    itemName: "earphone",
    price: 199
}
function showItemDetals(anyobj){
    return `name os the item is ${anyobj.itemName} and the price is ${anyobj.price}`
}
// console.log(showItemDetals(itemDetails))
//and we can do this also.
console.log(showItemDetals({
    itemName: "mobile",
    price: 9000
}));


//using array in function
let newarray = [100 , 200 ,500 ,600]
function printSecondvalOfArray(anyArray){
    return anyArray[1]
}
// console.log(printSecondvalOfArray(newarray))
//or we can do this

console.log(printSecondvalOfArray([100,900,400,600]))
