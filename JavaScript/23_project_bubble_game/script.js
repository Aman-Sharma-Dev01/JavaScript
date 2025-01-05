let finalScore;
function makeBubble(){
    let collector = ""
    
    for(let i = 1; i <=160; i++){
        let nb =Math.floor(Math.random()*10+1)
        collector += `<div class="bubble">${nb}</div>`
    }
    let bubble = document.querySelector('#pbtm')
    bubble.innerHTML = collector
}

function runTimer (){   
    let timer = 10;
    let intTime = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector('#time-interval').innerText = timer
        }
        else{
            clearInterval(intTime)
            document.querySelector('#pbtm').innerHTML = `<div id="game-over" class="game-over">Game Over <br> Your Score is ${finalScore}</div>`
        }
    },1000)
}

function hitCount (){
    let hitNum = Math.floor(Math.random()*10+1)
    document.querySelector('#hitcount').innerText = hitNum
}

function gameLogic(){ 
let listener = document.querySelector('#pbtm')
listener.addEventListener('click', function(detail){
    let listenerNum = detail.target.innerText
    let numOfHit = document.querySelector('#hitcount').innerText
    if(listenerNum === numOfHit){

        hitCount();
        let score = document.querySelector('#score').innerText
        let intnum = Number(score)
        finalScore = document.querySelector('#score').innerText = (intnum + 10)
        makeBubble();
    }
    // else{
    //     hitCount();
    //     let score = document.querySelector('#score').innerText
    //     let intnum = Number(score)
    //     document.querySelector('#score').innerText = (intnum - 10)
    //     makeBubble();

    // }
})
}


function gameStart(){
   let startlogo = document.querySelector('#pbtm').innerHTML = ` <div id="game-start">Star Game</div>`
   let startGame = document.querySelector('#game-start')
   startGame.addEventListener('click',function(){
       gameLogic();
       makeBubble();
       runTimer();
       hitCount();
   })
}
gameStart();