const sider=document.querySelector('.sidebar');
const cont=document.querySelector('.content');
const bu=document.querySelector('.demo');
bu.addEventListener('click',function(e){
    e.preventDefault();
    sider.classList.toggle('day');
    cont.classList.toggle('night');
    bu.classList.toggle('fa-sun');
})