 const progress = document.getElementById('progress');
 const prev = document.getElementById('prev');
 const next = document.getElementById('next');
 const circles = document.querySelectorAll('.circle')

 let currenActive = 1;  
 next.addEventListener('click',()=>{//给naxt添加监听事件
    currenActive++;
    update();//调用updade这个函数
 })
 prev.addEventListener('click',()=>{
    currenActive--;
    update();
 })
 function update(){
    circles.forEach((item,index)=>{//遍历所有的圆
        if(index < currenActive){
            item.classList.add('active');
        }else {
            item.classList.remove('active')
        }

    })
    progress.style.width = (currenActive-1) / (circles.length-1)*100+'%'
    if (currenActive === 1){
        prev.disabled = true;
    }else if(currenActive === 4 ){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }

 }