let letter;
let logic2 = 1
let logic = 1
let heart;
let envoTop;
let click2;
function openEnvo (){
    letter = document.querySelector('#letter')
    heart = document.querySelector('#heart')    
    envoTop  = document.querySelector('#envTop')
    click2 = document.querySelector('#click2')
envoTop.addEventListener('click',function(){
    if(logic === 1){
    envoTop.style.top = '116.5px'
    envoTop.style.transform = 'rotatex(180deg)' 
    letter.style.display = 'flex'
    heart.style.display = 'none'
    envoTop.style.zIndex = '0'
    click2.style.display = 'flex'
    logic = 0;
    }
    else{
    envoTop.style.top = '360px'
    envoTop.style.transform = 'rotatex(0deg)' 
    letter.style.display = 'none'
    envoTop.style.zIndex = '3'
    heart.style.display = 'flex'
    click2.style.display = 'none'
        logic = 1;
    }
})
}

function letterOpen (){
    letter.addEventListener('click',function(){
        if(logic2 === 1){
            letter.style.transform = 'translatey(-88%)'
            click2.style.display = 'none'
            logic2 = 0;
        }
        else{
            letter.style.transform = 'translatey(0%)'
            click2.style.display = 'flex'
            logic2 = 1;
        }
    })
}

function heartOpen(){
heart.addEventListener('click',function(){
    if(logic === 1){
    envoTop.style.top = '116.5px'
    envoTop.style.transform = 'rotatex(180deg)' 
    letter.style.display = 'flex'
    heart.style.display = 'none'
    click2.style.display = 'flex'
    envoTop.style.zIndex = '0'
    logic = 0;
    }
    })
}

openEnvo();
letterOpen();
heartOpen();