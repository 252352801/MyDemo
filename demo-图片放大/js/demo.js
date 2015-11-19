var pre_pic=document.getElementById("pre-pic");
var pre_box=document.getElementById("pre-box");
var big_pic=document.getElementById("big-pic");
var img=document.getElementById("big-img");
var pre_box_w;
var pre_box_h;
var img_w;
var img_h;
var mul_x;
var mul_y;
pre_pic.onmousemove=function(e){
  var e=e||window.event;
  var target=e.target||e.srcElement;
  var m_x = e.pageX || (e.clientX +
      (document.documentElement.scrollLeft
      || document.body.scrollLeft));
  var pre_pic_posit=getPosition(pre_pic);
  var box_x=m_x-pre_pic_posit[0]-pre_box_w/2; 
  var m_y= e.pageY || (e.clientY +
      (document.documentElement.scrollTop
      || document.body.scrollTop));
  var box_y=m_y-pre_pic_posit[1]-pre_box_h/2;
  var img_l=box_x*mul_x;
  var img_t=box_y*mul_y;
  pre_box.style.left=box_x+'px';
  pre_box.style.top=box_y+'px';
  big_pic.scrollLeft=img_l;
  big_pic.scrollTop=img_t;
}
pre_pic.onmouseover=function(e){
    pre_box.style.display="block";
	pre_box_w=pre_box.offsetWidth;
	pre_box_h=pre_box.offsetHeight;
    var sboxmovelen_x=this.offsetWidth-pre_box.offsetWidth;
    var sboxmovelen_y=this.offsetHeight-pre_box.offsetHeight;
    var lboxmovelen_x=img_w-pre_pic.offsetWidth;
	var  lboxmovelen_y=img_h-pre_pic.offsetHeight;
    mul_x=lboxmovelen_x/sboxmovelen_x;
    mul_y=lboxmovelen_y/sboxmovelen_y;
}
pre_pic.onmouseout=function(e){
    pre_box.style.display="none";
}
pre_box.onmouseover=function(e){
    big_pic.style.display="block";
	img_w=img.offsetWidth;
	img_h=img.offsetHeight;
}
pre_box.onmouseout=function(e){
    big_pic.style.display="none";
}
function getPosition(obj){ 
    var topValue= 0,leftValue= 0;
    while(obj){  
        leftValue+= obj.offsetLeft;
        topValue+= obj.offsetTop; 
        obj= obj.offsetParent;   
    }   
  finalvalue=[leftValue,topValue];  
   return finalvalue; 
}
