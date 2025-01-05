// What is DOM?
// DOM stands for Document Object Model.\

// There are four pillars of DOM.
// 1 --> Selection of an Element
// 2 --> Changing HTML
// 3 --> changing CSS
// 4 --> Event Listener


/*********** Selection of an Element ***********/

let cont = document.querySelector('.box') // for selecting one element
// console.log(cont);

let cont2 = document.querySelectorAll('.box') // for selecting multiple elements
// console.log(cont2);
cont2.forEach((item)=>{
    // console.log(item.innerText); 
})

/*********** Changing HTML ***********/

const boxIntoSqu = document.querySelectorAll('.box')
boxIntoSqu[0].innerText = 'Squ1'
boxIntoSqu[1].innerText = 'Squ2'
boxIntoSqu[2].innerText = 'Squ3'

/*********** Changing CSS ************/

const boxs = document.querySelectorAll('.box')
boxs.forEach((item)=>{
    item.style.backgroundColor = '#36454F'
    item.style.fontSize = '20px'
})

let body = document.querySelector('body')
body.style.backgroundColor = '#212121'


/*********** Event Listener ************/

// when you click on the boxs they will change there colour.
let chngColor = document.querySelectorAll('.box')
chngColor[0].addEventListener('click', function (){
    chngColor[0].style.backgroundColor = '#5f910e'
})
chngColor[1].addEventListener('click', function (){
    chngColor[1].style.backgroundColor = '#5f910e'
})
chngColor[2].addEventListener('click', function (){
    chngColor[2].style.backgroundColor = '#5f910e'
})
