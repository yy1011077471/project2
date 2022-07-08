const search = document.querySelector('.search');
const btn = document.querySelector('.btn')
const input =document.querySelector('.input')

btn.addEventListener('click',()=>{
    search.classList.toggle('active');/* .toggle没有active就添加 有就删除*/
    input.focus();
})