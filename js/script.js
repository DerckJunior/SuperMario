
const mario = window.document.querySelector('img.mario');

const pipe = window.document.querySelector('img.pipe');



const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {


        mario.classList.remove('jump');




    }, 500); 

}

const loop = setInterval(() => {


    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    console.log(marioPosition);




    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 104){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;



        mario.src = 'imagens/game-over.png';
        mario.style.width =' 80px';
        mario.style.marginLeft = '50px';


        clearInterval(loop);
    }




}, 10);

window.document.addEventListener('keydown', jump);



