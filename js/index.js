const playerKeyboard = document.querySelector('#cube');
document.addEventListener('keydown', moveCube);
function moveCube(event) {
    const key = event.code;
    console.log(key);
    const aDown = key == 'ArrowDown';
    const aUp = key == 'ArrowUp';
    const aLeft = key == 'ArrowLeft';
    const aRight = key == 'ArrowRight';
    let posTop = 10;
    let posLeft = 10;
    switch (key) {
        case aDown:
            playerKeyboard.style.top = posTop + '50%';
            posTop++;
            break;
            case aUp:
               
                break;
                case aRight:
                    
                    break;
                    case aLeft:
                        
                        break;
                        
                        default:
                            break;
    }
}