/*通过id取dom*/
function getById(str){
    return  document.getElementById(str);
}
/*通过class取dom*/
function getByClass(cls,pEle,tag){
    var p=pEle?pEle:document;
    var t=tag?tag:'*';
    if(p.getElementsByClassName){
        return p.getElementsByClassName(cls);
        
    }else{      
        var r=[];
        var e=p.getElementsByTagName(t);
        for(var i=0,len=e.length;i<len;i++){
            if(e[i].className==cls){
                r.push(e[i]);
            }
        }
        return r;
    }
}
/*通过tag取dom*/
function getByTag(){
    return document.getElementsByTagName(str);
}
/*是否包含指定class*/
function hasClass(obj,cls){
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
/*添加class*/
function addClass(obj,cls){
    if (!obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))) {
        obj.className += " " +cls;
    }
    return obj;
}
/*移除class*/
function removeClass(obj,cls){
    if (obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
    return obj;
}

/*获取样式值*/
function getStyle(elem,styleName){
    if(elem.style[styleName]){//内联样式
        return elem.style[styleName].replace(/[^0-9.]/ig,'');
    }
    else if(elem.currentStyle){//IE
        return elem.currentStyle[styleName].replace(/[^0-9.]/ig,'');
    }
    else if(document.defaultView && document.defaultView.getComputedStyle){//DOM
        styleName = styleName.replace(/([A-Z])/g,'-$1').toLowerCase();
        var s = document.defaultView.getComputedStyle(elem,'');
        return s&&s.getPropertyValue(styleName).replace(/[^0-9.]/ig,'');
    }
    else{//other,for example, Safari
        return null;
    }
}
/*获取元素位置*/
function getPosition(obj){ 
    var topValue= 0,leftValue= 0;
    while(obj){  
        leftValue+= obj.offsetLeft;
        topValue+= obj.offsetTop; 
        obj= obj.offsetParent;   
    }   
  finalvalue={left:leftValue,top:topValue};  
   return finalvalue; 
}


