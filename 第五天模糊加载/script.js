const bg = document.querySelector('.bg');
const Text = document.querySelector('.Text');

let load = 0;
let timer = setInterval(blurring,30);//定时器，每隔30ms执行一次bluring

function blurring(){
    load++;
    // Text.innerText = load +'%'
    Text.innerText =`${load}%`;
    Text.style.opacity = 1-load/100;
    //模糊度从30-0变化
    bg.style.filter = `blur(${30-load/100*30}px)`;
    if(load > 99){
        clearInterval(timer);//清除定时器
       
    }

}