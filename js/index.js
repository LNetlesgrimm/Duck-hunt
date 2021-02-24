let posTop = 10;
let posLeft = 10;

const playerData = document.querySelector("#formPlayer");
playerData.addEventListener('submit', gettPlayerName);

function gettPlayerName(event) {
  event.preventDefault();
  const player1 = document.querySelector('#player1').value;
  const name1 = document.querySelector('#p1');
  const sc1 = document.querySelector('#sc1');

  const player2 = document.querySelector('#player2').value;
  const name2 = document.querySelector('#p2');
  const sc2 = document.querySelector('#sc2');

  name1.innerText = player1;
  name2.innerText = player2;

}








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
  //stop the event listenet of the mouse and keyboard
  stop();
  clearInterval(interval);
}

//stop the event listener of the mouse and keyboard
function stop() {
  document.removeEventListener("keydown", moveCube);
  playerKeyboard.removeEventListener("click", touched);
}
/**name on the field
 *
 */
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
