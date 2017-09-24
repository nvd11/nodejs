
objMove = {};
objMove.startMoveWidth = function(obj, iTarget){
  if (global.isUndefined(obj.timer)){
      obj.timer = 0;
  }else{
    clearInterval(obj.timer);
  }

  obj.timer=setInterval(function(){
    speed=(iTarget - parseInt(objMove.getCurStyle(obj).width)) / 6;
    //don't forget make it to a integer
    speed=speed>0?Math.ceil(speed):Math.floor(speed);

    if (parseInt(objMove.getCurStyle(obj).width) == iTarget){
        clearInterval(obj.timer);
    }
    else{
        obj.style.width = parseInt(objMove.getCurStyle(obj).width) + speed + 'px';
    }

  },30)
}

objMove.getCurStyle = function(obj){
     if(obj.currentStyle){
       return obj.currentStyle;
     }else{
       return getComputedStyle(obj, false);
     }
};
