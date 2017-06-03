
var slide =document.getElementsByClassName("slide-lkj");
var wid =document.documentElement.clientWidth;
var hei=document.documentElement.clientHeight;
console.log(slide)
for (var i=0;i<slide.length;i++)
{

    slide[i].style.width=wid+"px";
    slide[i].style.height=hei+"px";
    // console.log(atr.style.width);
}
var slideb =document.getElementsByClassName("slide-bj");
