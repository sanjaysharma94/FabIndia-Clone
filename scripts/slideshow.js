const myslide=document.querySelectorAll(".myslider")
let dot=document.querySelectorAll(".dot");
let count=1;
slidefun(count);
let timer=setInterval(autoslide,5000);
function autoslide(){
    count+=1;
    slidefun(count);
}
function pluseSlide(n){
    count+=n;
    slidefun(count);
    resetTimer();
}
function currentslide(n) {
  count = n;
  slidefun(count);
  resetTimer();
}
function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoslide, 5000);
}
function slidefun(n){
    let i;
    for(i=0;i<myslide.length;i++){
        myslide[i].style.display="none";
    }
    for(i=0;i<dot.length;i++){
        dot[i].classList.remove('active');
    }
    if(n>myslide.length){
        count=1;
    }
    if(n<1){
        count=myslide.length;
    }
    myslide[count-1].style.display="block";
    dot[count-1].classList.add('active');
}