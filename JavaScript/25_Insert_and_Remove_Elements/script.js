// Attribute function
console.log(document.querySelector('.box').attributes) // it will show all the attributes present in the element.
console.log(document.querySelector('.box').hasAttribute('style')) // hasAttribute is used to check a perticular attributre present in the element.
console.log(document.querySelector('.box').getAttribute('style')) // getAttribute is used to show a perticular attribute in the element.
console.log(document.querySelector('.box').setAttribute('style' , 'background-color: pink;')) // setAttribute is used to set any attribute in a element.
console.log(document.querySelector('.box').removeAttribute('style')) //used to remove any attribute.


// Inserting elements 

let div = document.createElement('div') // document.createElement() is used to create an element. 
let div2 = document.createElement('div')
div2.setAttribute('class','box')
div.setAttribute("class","box")
div2.innerText = 'i am box 3'
div.innerText = 'i am box 2'
let cont = document.querySelector(".container")
cont.append(div) // append is used to insert a element just before the container end.
cont.prepend(div2) // prepend is used to insert a element just after the container start.
cont.after() // after is used to insert a element just after the container end.
cont.before() // before is used to insert a element just before the container start.
let elem3 = document.createElement('p')
elem3.innerText = 'i am paragraph'
elem3.style.color = 'white'
// cont.replaceWith(elem3) // replaceWith is used to replace an element with another


// node removal 
document.querySelector('.box').remove() // it will remove the first element which has box class


// classList
document.querySelector('.container').classList // classList will show all the class name that the element have.
document.querySelector('.container').classList.add('name1') //used to add class name
document.querySelector('.container').classList.remove('name2') // used to remove class name


// toggle
document.querySelector('.container').classList.toggle('name2') // when the element is present then it will remove that element.
document.querySelector('.container').classList.toggle('name2') // but if the element is not present then it will insert the element.

// setInterval and clearInterval
function randColor (){
   let val1 = (Math.floor(Math.random()*255))
   let val2 = (Math.floor(Math.random()*255))
   let val3 = (Math.floor(Math.random()*255))

   let rgbVal = `rgb(${val1}, ${val2}, ${val3})`
   makeBoxChangeColor(rgbVal)
}

function makeBoxChangeColor(val){
    setInterval(()=>{ // setInterval is used to run a code again and again in a specific period of time. 
        document.querySelectorAll('.box').forEach((item)=>{
            item.style.backgroundColor = val
        })
        randColor();
    },1000)
    clearInterval(1) // clearInterval is used to stop the setInterval.

}

randColor()

//setTimeout and clearTimeout
setTimeout(()=>{

}, 5000)

clearTimeout()
// setTimeout is same as setInterval but it run the code only one time after the specific period of time.
//cleartimeout is used to stop the effect of setTimeout
