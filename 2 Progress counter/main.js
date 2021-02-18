const progress = document.querySelector('#progress');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let activeCounter = 1;

nextBtn.addEventListener('click', () => {
    activeCounter++;

    // bu ifoda next bosilganda 4 dan oshib ketmasligini taminlaydi
    if(activeCounter > circles.length){
        activeCounter = circles.length;
    }

    update();
})

prevBtn.addEventListener('click', () => {
    activeCounter--;

    // bu ifoda prev bosilganda 1 tushib ketmasligini taminlaydi
    if(activeCounter < 1){
        activeCounter = 1;
    }

    update();
})

function update(){

    circles.forEach((circle, key) => {

        if(key < activeCounter){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if(activeCounter === 1){
        prevBtn.disabled = true;
    } else if (activeCounter === circles.length){
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}

