let ul=document.querySelector('ul');
ul.innerHTML =ul.innerHTML+ul.innerHTML;
let lis=document.querySelectorAll('li');
let spa=-2;
ul.style.width=lis[0].offsetWidth*lis.length+'px';
function move(){
    if(ul.offsetLeft<-ul.offsetWidth/2){
        ul.style.left='0';
    }
    ul.style.left=ul.offsetLeft+spa+'px';
}
let timer=setInterval(move,30);
ul.addEventListener('mousemove',function(){
    clearInterval(timer);
})
ul.addEventListener('mouseout',function(){
    timer=setInterval(move,30);
})