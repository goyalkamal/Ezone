const imgs=[];
imgs[0]="pics/idk.jpg";
imgs[1]="pics/m3.jpg";
imgs[2]="pics/oneadver.jpg";
// imgs[3]="pics/friday.jpg";
imgs[3]="pics/lpmain.jpg";



var i=0;
const time=2000;
function chngimg(){
    document.querySelector('.phone').src=imgs[i];
    // console.log("chaged");
    if(i<imgs.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout( "chngimg()", time);

}
window.onload=chngimg;
const iss=document.getElementsByClassName("phone");
const nextbu=document.querySelector('.next');
const prevbu=document.querySelector('.prev');
const im=iss[0];
nextbu.addEventListener('click',function(_){
    if(im.src.match("pics/idk.jpg")){
        im.src="pics/m3.jpg";
        // im.classList.add('animate');
        // nextbu.addEventListener('transitonend',function(){
        //     im.classList.remove('animate');
        // });
    }
    else if(im.src.match("pics/m3.jpg")){
        im.src="pics/oneadver.jpg";
    }
    else if(im.src.match("pics/oneadver.jpg")){
        im.src="pics/lpmain.jpg";
    }
    else if(im.src.match("pics/lpmain.jpg")){
        im.src="pics/idk.jpg";
    }
});
prevbu.addEventListener('click',function(_){
    if(im.src.match("pics/idk.jpg")){
        im.src="pics/lpmain.jpg";
    }
    else if(im.src.match("pics/lpmain.jpg")){
        im.src="pics/oneadver.jpg";
    }
    else if(im.src.match("pics/oneadver.jpg")){
        im.src="pics/m3.jpg";
    }
    else if(im.src.match("pics/m3.jpg")){
        im.src="pics/idk.jpg";
    }
});