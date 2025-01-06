// Some imp Global Variable
let timer;
let val;
let mainBall;
let numOfHit;
let bubbleval;
let finalScore = 0;
let lifeLine = document.querySelector("#life").innerText;
function makeBubble() {
  let collector = "";

  for (let i = 1; i <= 160; i++) {
    let nb = Math.floor(Math.random() * 10 + 1);
    collector += `<div class="bubble">${nb}</div>`;
  }
  let bubble = document.querySelector("#pbtm");
  bubble.innerHTML = collector;
}

function runTimer() {
  timer = 60;
  let intTime = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#time-interval").innerText = timer;
    } else {
      clearInterval(intTime);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<div id="game-over" class="game-over">Game Over <br> Your Score is : ${finalScore}</div>`;
    }
  }, 1000);
}

function hitCount() {
  let hitNum = Math.floor(Math.random() * 10 + 1);
  document.querySelector("#hitcount").innerText = hitNum;
  numOfHit = document.querySelector("#hitcount").innerText;
}

function gameLogic() {
  let bubble = document.getElementsByClassName("bubble");
  val = Array.from(bubble);

  for (let i = 0; i < val.length; i++) {
    val[i].addEventListener("click", function () {
      mainBall = val[i].innerText;
      // console.log(mainBall);
      makeBubble();
      gameLogic();

      if (mainBall === numOfHit) {
        hitCount();
        let score = document.querySelector("#score").innerText;
        let intnum = Number(score);
        finalScore = document.querySelector("#score").innerText = intnum + 10;
        makeBubble();
        gameLogic();
      } else {
        hitCount();
        // let score = document.querySelector('#score').innerText
        // let intnum = Number(score)
        // document.querySelector('#score').innerText = (intnum - 10)
        lifeLine--;
        document.querySelector("#life").innerText = lifeLine;
        makeBubble();
        gameLogic();
        lifeEnd();
      }
    });
  }
}

function gameStart() {
  let startlogo = (document.querySelector(
    "#pbtm"
  ).innerHTML = ` <div id="game-start">Star Game</div>`);
  let startGame = document.querySelector("#game-start");
  startGame.addEventListener("click", function () {
    makeBubble();
    gameLogic();
    runTimer();
    hitCount();
  });
}

function lifeEnd() {
  if (lifeLine === 0) {
    document.querySelector(
      "#pbtm"
    ).innerHTML = `<div id="game-over" class="game-over">Game Over <br> Your Score is : ${finalScore}</div>`;
    timer = 0;
  }
}
gameStart();
