let bulb = document.querySelector('.bulb')
let btn = document.querySelector('button')
let flag = 0
btn.addEventListener('click',()=>{
    if(flag === 0){
        bulb.style.backgroundColor = 'yellow'
        flag = 1
        btn.innerText = 'On'
    }
    else{
        bulb.style.backgroundColor = 'azure'
        flag = 0
        btn.innerText = 'Off'
    }
})