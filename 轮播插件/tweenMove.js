/* Tween算法*/
     var Tween = {
         Linear: function (t, b, c, d) {
             return c * t / d + b;
         },
         Quadratic: {
             easeIn: function (t, b, c, d) {
                 return c * (t /= d) * t + b;
             },
             easeOut: function (t, b, c, d) {
                 return -c * (t /= d) * (t - 2) + b;
             },
             easeInOut: function (t, b, c, d) {
                 if ((t /= d / 2) < 1) return c / 2 * t * t + b;
                 return -c / 2 * ((--t) * (t - 2) - 1) + b;
             }
         },
         Cubic: {
             easeIn: function (t, b, c, d) {
                 return c * (t /= d) * t * t + b;
             },
             easeOut: function (t, b, c, d) {
                 return c * ((t = t / d - 1) * t * t + 1) + b;
             },
             easeInOut: function (t, b, c, d) {
                 if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
                 return c / 2 * ((t -= 2) * t * t + 2) + b;
             }
         },
         Quartic: {
             easeIn: function (t, b, c, d) {
                 return c * (t /= d) * t * t * t + b;
             },
             easeOut: function (t, b, c, d) {
                 return -c * ((t = t / d - 1) * t * t * t - 1) + b;
             },
             easeInOut: function (t, b, c, d) {
                 if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
                 return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
             }
         },
         Quintic: {
             easeIn: function (t, b, c, d) {
                 return c * (t /= d) * t * t * t * t + b;
             },
             easeOut: function (t, b, c, d) {
                 return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
             },
             easeInOut: function (t, b, c, d) {
                 if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
                 return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
             }
         },
         Sinusoidal: {
             easeIn: function (t, b, c, d) {
                 return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
             },
             easeOut: function (t, b, c, d) {
                 return c * Math.sin(t / d * (Math.PI / 2)) + b;
             },
             easeInOut: function (t, b, c, d) {
                 return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
             }
         },
         Exponential: {
             easeIn: function (t, b, c, d) {
                 return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
             },
             easeOut: function (t, b, c, d) {
                 return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
             },
             easeInOut: function (t, b, c, d) {
                 if (t == 0) return b;
                 if (t == d) return b + c;
                 if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                 return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
             }
         },
         Circular: {
             easeIn: function (t, b, c, d) {
                 return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
             },
             easeOut: function (t, b, c, d) {
                 return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
             },
             easeInOut: function (t, b, c, d) {
                 if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                 return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
             }
         },
         Elastic: {
             easeIn: function (t, b, c, d, a, p) {
                 if (t == 0) return b;
                 if ((t /= d) == 1) return b + c;
                 if (!p) p = d * .3;
                 if (!a || a < Math.abs(c)) {
                     a = c;
                     var s = p / 4;
                 }
                 else var s = p / (2 * Math.PI) * Math.asin(c / a);
                 return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
             },
             easeOut: function (t, b, c, d, a, p) {
                 if (t == 0) return b;
                 if ((t /= d) == 1) return b + c;
                 if (!p) p = d * .3;
                 if (!a || a < Math.abs(c)) {
                     a = c;
                     var s = p / 4;
                 }
                 else var s = p / (2 * Math.PI) * Math.asin(c / a);
                 return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
             },
             easeInOut: function (t, b, c, d, a, p) {
                 if (t == 0) return b;
                 if ((t /= d / 2) == 2) return b + c;
                 if (!p) p = d * (.3 * 1.5);
                 if (!a || a < Math.abs(c)) {
                     a = c;
                     var s = p / 4;
                 }
                 else var s = p / (2 * Math.PI) * Math.asin(c / a);
                 if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                 return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
             }
         },
         Back: {
             easeIn: function (t, b, c, d, s) {
                 if (s == undefined) s = 1.70158;
                 return c * (t /= d) * t * ((s + 1) * t - s) + b;
             },
             easeOut: function (t, b, c, d, s) {
                 if (s == undefined) s = 1.70158;
                 return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
             },
             easeInOut: function (t, b, c, d, s) {
                 if (s == undefined) s = 1.70158;
                 if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                 return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
             }
         },
         Bounce: {
             easeIn: function (t, b, c, d) {
                 return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
             },
             easeOut: function (t, b, c, d) {
                 if ((t /= d) < (1 / 2.75)) {
                     return c * (7.5625 * t * t) + b;
                 } else if (t < (2 / 2.75)) {
                     return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                 } else if (t < (2.5 / 2.75)) {
                     return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                 } else {
                     return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                 }
             },
             easeInOut: function (t, b, c, d) {
                 if (t < d / 2) return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
                 else return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
             }
         }
     };

 /*
  *基于tween算法的缓动动画
  * @author:weiqingyu    2015/09/30
  * @param  <json>  paramter  参数如下
    paramter={
        element:【必须】运动元素的id,
        attr:【必须】需要改变的属性
        value:【必须】改变的值 可以为正负
         time:【可选】执行动画的时间,单位ms,默认300ms
        moveName:【可选】动画名,可选值：Linear  Quadratic  Cubic  Quartic
                  Quintic  Sinusoidal  Exponential  Circular  Elastic  Back  Bounce
                  默认为Linear
        moveType:【可选】动画的缓动方式，可选值：easeIn easeOut easeInOut,默认为easeIn
        callback:【可选】动画结束的回调函数
    }
 */
function tweenMove(paramter){
    //t、b、c、d（开始时间，初始值，变化量，执行次数）
    var t_o=5;//每改变一次的时间间隔
    var default_time=300;//默认的执行时间
    var obj=paramter.element;//移动的dom对象
    var attr=paramter.attr;//属性
    var t=0;//开始时间
    var b=attr!='opacity'?parseInt(getStyle(obj,paramter.attr)):parseFloat(getStyle(obj,paramter.attr))*100;//初始值
    var b=parseInt(getStyle(obj,paramter.attr));
    var c=attr!='opacity'?paramter.value:paramter.value*100;//变化量
    var d=paramter.time?paramter.time/t_o:default_time/t_o;//次数
    var moveName=paramter.moveName?paramter.moveName:'Linear';//运动名称
    var moveType=paramter.moveType?paramter.moveType:'easeIn';//运动方式
    function Run(){
        //clearInterval(obj.timer);
        if(moveName!='Linear') {
            if(attr!='opacity'){
                obj.style[attr] = Math.ceil(Tween[moveName][moveType](t, b, c, d)) + "px";
            }else{
                obj.style[attr] = Math.ceil(Tween[moveName][moveType](t, b, c,d))/100;
            }
        }else{
            if(attr!='opacity'){
                obj.style[attr] = Math.ceil(Tween[moveName](t, b, c, d)) + "px";
            }else{
                obj.style[attr] = Math.ceil(Tween[moveName](t, b, c,d))/100;
            }
        }
        if(t<d){
            t++;setTimeout(Run,t_o);
        }else{
            if(typeof paramter.callback=='function'){
                paramter.callback();
            }
        }
    }
    Run();
   /* 获取元素的属性值<string>*/
    function getStyle(elem,styleName){
        if(elem.style[styleName]){//内联样式
            return elem.style[styleName].replace(/[^0-9.-]/ig,'');
        }
        else if(elem.currentStyle){//IE
            return elem.currentStyle[styleName].replace(/[^0-9.-]/ig,'');
        }
        else if(document.defaultView && document.defaultView.getComputedStyle){//DOM
            styleName = styleName.replace(/([A-Z])/g,'-$1').toLowerCase();
            var s = document.defaultView.getComputedStyle(elem,'');
            return s&&s.getPropertyValue(styleName).replace(/[^0-9.-]/ig,'');
        }
        else{
            return null;
        }
    }
}