

const playerkeyboard = document.querySelector('#cube');


playerkeyboard.addEventListener('click', touched)



function touched(event) {

    //chanch the status od 
    alert('You Win!');//debugger
    playerkeyboard.classList.add('cube_shuted');
    //stop the event listenet of the mouse and keyboard
    playerkeyboard.removeEventListener('click', touched);
    playerkeyboard.removeEventListener('keydown', moveCube);


}



