let posTop = 0;
let posLeft = 0;

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
  switch (key) {
    case aDown:
      posTop++;
      playerKeyboard.style.top = posTop + "%";
      break;
    case aUp:
      posTop--;
      playerKeyboard.style.top = posTop + "%";
      break;
    case aRight:
      posLeft++;
      playerKeyboard.style.left = posLeft + "%";
      break;
    case aLeft:
      posLeft--;
      playerKeyboard.style.left = posLeft + "%";
      break;
    default:
      break;
  }
}
// Mouse event
playerKeyboard.addEventListener("click", touched);

function touched(event) {
  //chanch the status od
  alert("You Win!"); //debugger
  playerKeyboard.classList.add("cube_shuted");
  //stop the event listenet of the mouse and keyboard
  playerKeyboard.removeEventListener("click", touched);
  playerKeyboard.removeEventListener("keydown", moveCube);
}
