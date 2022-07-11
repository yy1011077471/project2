const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',()=>{
const A = window.innerHeight/5*4;
boxes.forEach(box =>{
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < A){
        box.classList.add('show');
    }else{
        box.classList.remove('show');
    }
})

});