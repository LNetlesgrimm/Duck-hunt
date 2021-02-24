let posTop = 10;
let posLeft = 10;

// Players names
const playerData = document.querySelector("#formPlayer");
playerData.addEventListener("submit", gettPlayerName);

function gettPlayerName(event) {
  event.preventDefault();
  timer();
  cubeGo();
  clickGo();
  const player1 = document.querySelector("#player1").value;
  const player2 = document.querySelector("#player2").value;
  console.log(player1);
}

// Keyboard event
const playerKeyboard = document.querySelector("#cube");
function cubeGo() {
  document.addEventListener("keydown", moveCube);
}
function moveCube(event) {
  const key = event.code;
  console.log(key);
  const aDown = key == "ArrowDown";
  const aUp = key == "ArrowUp";
  const aLeft = key == "ArrowLeft";
  const aRight = key == "ArrowRight";
  //conditions
  if (aDown) {
    posTop = posTop + 10;
  }
  if (posTop > 90) {
    posTop = 0;
  }
  playerKeyboard.style.top = posTop + "%";
  if (aUp) {
    posTop = posTop - 10;
  }
  if (posTop < 0) {
    posTop = 0;
  }
  playerKeyboard.style.top = posTop + "%";
  if (aRight) {
    posLeft = posLeft + 10;
  }
  if (posLeft > 90) {
    posLeft = 0;
  }
  playerKeyboard.style.left = posLeft + "%";
  if (aLeft) {
    posLeft = posLeft - 10;
  }
  if (posLeft < 0) {
    posLeft = 0;
  }
  playerKeyboard.style.left = posLeft + "%";
}
//stop the event listener of the mouse and keyboard
function stop() {
  document.removeEventListener("keydown", moveCube);
  playerKeyboard.removeEventListener("click", touched);
  clearInterval(interval);
}

// Mouse event
function clickGo() {
  playerKeyboard.addEventListener("click", touched);
}
function touched(event) {
  //chanch the status od
  alert("You Win!"); //debugger
  playerKeyboard.classList.add("cube_shuted");
  //stop the event listenet of the mouse and keyboard
  stop();
}

//TIMER
let interval;
function timer() {
  let number = 30;
  interval = setInterval(() => {
    document.querySelector(".counter").textContent = number;
    number--;
    console.log(number);
    if (number == -1) {
      playerKeyboard.style.backgroundColor = "green";
      stop();
      alert("The keyboard user won!");
    }
  }, 1000);
}
