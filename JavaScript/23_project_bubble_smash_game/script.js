// Some imp Global Variable
let timer;
let val;
let mainBall;
let btnColor;
let score;
let numOfHit;
let bubbleval;
let finalScore = 0;
let lifeLine = (document.querySelector("#life").innerText = 3);
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
      // document.querySelector(
      //   "#pbtm"
      // ).innerHTML = `<div id="game-over" class="game-over">Game Over <br> Your Score is : ${finalScore}</div>`;
      restart();
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
        score = document.querySelector("#score").innerText;
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
  // let startlogo = (document.querySelector(
  //   "#pbtm"
  // ).innerHTML = ` <div id="game-start">Star Game</div>`);
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
    // document.querySelector(
    //   "#pbtm"
    // ).innerHTML = `<div id="game-over" class="game-over">Game Over <br> Your Score is : ${finalScore}</div>`;
    restart();
    timer = 0;
  }
}

function bgColorChange() {
  let mainBody = document.querySelector("#main-body");
  let pTop = document.querySelector("#ptop");
  let btn = document.querySelector("#game-start");
  let boxes = document.querySelectorAll(".box");

  let purple = document.querySelector("#purple");
  purple.addEventListener("click", () => {
    mainBody.style.backgroundColor = "rgb(165, 165, 248)";
    pTop.style.backgroundColor = "rgb(135, 74, 197)";
    btnColor = btn.style.backgroundColor = "rgb(135, 74, 197)";
    btn.style.backgroundColor = "rgb(135, 74, 197)";

    boxes.forEach((item) => {
      item.style.color = "rgb(135, 74, 197)";
    });
  });

  let blue = document.querySelector("#blue");
  blue.addEventListener("click", () => {
    mainBody.style.backgroundColor = "rgb(137, 207, 240)";
    pTop.style.backgroundColor = "rgb(24, 130, 210)";
    btnColor = btn.style.backgroundColor = "rgb(24, 130, 210)";
    btn.style.backgroundColor = "rgb(24, 130, 210)";

    boxes.forEach((item) => {
      item.style.color = "rgb(24, 130, 210)";
    });
  });

  let pink = document.querySelector("#pink");
  pink.addEventListener("click", () => {
    mainBody.style.backgroundColor = "rgb(244, 198, 196)";
    pTop.style.backgroundColor = "	rgb(255, 139, 148)";
    btnColor = btn.style.backgroundColor = "	rgb(255, 139, 148)";
    btn.style.backgroundColor = "	rgb(255, 139, 148)";

    boxes.forEach((item) => {
      item.style.color = "	rgb(255, 139, 148)";
    });
  });

  let black = document.querySelector("#black");
  black.addEventListener("click", () => {
    mainBody.style.backgroundColor = "rgb(79, 83, 91)";
    pTop.style.backgroundColor = "rgb(46, 48, 53)";
    btnColor = btn.style.backgroundColor = "rgb(46, 48, 53)";
    btn.style.backgroundColor = "rgb(46, 48, 53)";

    boxes.forEach((item) => {
      mainColor = item.style.color = "rgb(46, 48, 53)";
    });
  });

  let yellow = document.querySelector("#yellow");
  yellow.addEventListener("click", () => {
    mainBody.style.backgroundColor = "rgb(232, 229, 167)";
    pTop.style.backgroundColor = "rgb(207, 200, 56)";
    btnColor = btn.style.backgroundColor = "rgb(207, 200, 56)";
    btn.style.backgroundColor = "rgb(207, 200, 56)";

    boxes.forEach((item) => {
      item.style.color = "rgb(207, 200, 56)";
    });
  });

  let green = document.querySelector("#green");
  green.addEventListener("click", () => {
    mainBody.style.backgroundColor = "rgb(213, 234, 216)";
    pTop.style.backgroundColor = "rgb(159, 212, 163)";
    btnColor = btn.style.backgroundColor = "rgb(159, 212, 163)";
    btn.style.backgroundColor = "rgb(159, 212, 163)";

    boxes.forEach((item) => {
      item.style.color = "rgb(159, 212, 163)";
    });
  });
}

function restart() {
  let endbtn = document.querySelector("#pbtm");
  endbtn.innerHTML = `<div id="game-over" class="game-over"><div>Game Over </div> <div> Your Score is : ${finalScore} </div> <div id = "restartbtn" >Restart</div></div>`;
  document.querySelector("#restartbtn").addEventListener("click", () => {
    endbtn.innerHTML = `<div id="game-start">Star Game</div>`;
    document.querySelector("#game-start").style.backgroundColor = `${btnColor}`;
    lifeLine = document.querySelector("#life").innerText = 3;
    score = document.querySelector("#score").innerText = 0;
    finalScore = 0;
    gameStart();
    bgColorChange();
  });
}

bgColorChange();
gameStart();
