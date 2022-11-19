
const bb=document.querySelector('.demo')
const fs=document.querySelector('.fs');
const bo=document.querySelector('.boddy');
bb.addEventListener('click',function(e){
    e.preventDefault();
    bo.classList.toggle('night');
    fs.classList.toggle('black');
    bb.classList.toggle('fa-sun');
});