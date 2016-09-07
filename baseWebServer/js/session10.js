var app = angular.module('myApp', ['ngMaterial']);
app.controller('myCtrl', function($scope, $interval) {

   var sc = $scope;

   sc.model = {};
   sc.model.value1 = null;

   var timer1;

   sc.startTiming = function(){
     sc.model.value1 = 1;
     //timer1 = setInterval(function() {   //common js form
     timer1 = $interval(function() {       //for angular, it can auto refresh the layout
       sc.model.value1 += 1;
     },1000)
   }

   sc.stopTiming = function(){
     clearInterval(timer1);
   }


   var timer2;
   var oDiv = document.getElementById('div1');
   var oUl = oDiv.getElementsByTagName('ul')[0];
   var ali = oUl.getElementsByTagName('li');
   sc.speed = 2;

   oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;
   oUl.style.width = ali[0].offsetWidth * ali.length + 'px';

   sc.rollStart = function(){
       timer2 = $interval(function () {
         if ( 0 - oUl.offsetLeft  >  oUl.offsetWidth / 2){
           oUl.style.left = 0;
         }

         if (oUl.offsetLeft  > 0 ){
           oUl.style.left = (- oUl.offsetWidth / 2) + 'px';
         }
          oUl.style.left = oUl.offsetLeft + sc.speed + 'px';
       }, 30);
   }

   sc.mouseIn = function(){
      $interval.cancel(timer2);
   }

   sc.mouseOut = function(){
     sc.rollStart();
   }

   sc.left = function(){
     sc.speed = -2;
   }

   sc.right = function(){
     sc.speed = 2;
   }

   sc.rollStart();

});
