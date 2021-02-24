let posTop = 10;
let posLeft = 10;

// Keyboard event
const playerKeyboard = document.querySelector("#cube");
document.addEventListener("keydown", moveCube);
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

// Mouse event
playerKeyboard.addEventListener("click", touched);

function touched(event) {
  //chanch the status od
  alert("You Win!"); //debugger
  playerKeyboard.classList.add("cube_shuted");
  stop();
  clearInterval(interval);
}

//stop the event listener of the mouse and keyboard
function stop() {
  document.removeEventListener("keydown", moveCube);
  playerKeyboard.removeEventListener("click", touched);
}
//TIMER

let number = 10;
const interval = setInterval(() => {
  document.querySelector(".counter").textContent = number;
  number--;
  console.log(number);
  if (number == -1) {
    clearInterval(interval);
    playerKeyboard.style.backgroundColor = "green";
    stop();
    alert("The keyboard user won!");
  }
}, 1000);
