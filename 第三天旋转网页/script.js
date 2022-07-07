const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
//添加点击事件监听
open.addEventListener('click',()=>{
    container.classList.add('show-nav')//添加css类
})
close.addEventListener('click',()=>{
    container.classList.remove('show-nav')
})