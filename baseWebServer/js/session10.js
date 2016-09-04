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
});
