//当点击的时候给其他元素 ‘B’这个类名
const As = document.querySelectorAll('.A');//选择所有类名为A的元素
//forEach():对数组的每一个元素执行一次给定的函数
As.forEach((item)=>{//遍历伪数组As[]里的数据
    item.addEventListener('click',()=>{//对item进行事件监听
        As.forEach((item)=>{
            item.classList.remove('B');//当点击时删除掉其他元素的'B'这个类名
         })
         item.classList.add('B');//给当前点击的元素添加'B'这个类名
    })
});