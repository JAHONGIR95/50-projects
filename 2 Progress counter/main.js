const progress = document.querySelector('.progress');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let activeCounter = 1;
nextBtn.addEventListener('click', () => {
    activeCounter++;

    if(activeCounter > circles.length){
        activeCounter = circles.length;
    }
    console.log(activeCounter);
})