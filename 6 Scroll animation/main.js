let boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkboxes);

checkboxes();

function checkboxes(){

    let trigger = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        let someCalc = box.getBoundingClientRect().top;

        if(someCalc < trigger){
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
    
    console.log(someCalc);
}