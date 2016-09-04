var app = angular.module('myApp', ['ngMaterial']);
app.controller('myCtrl', function($scope) {

   var sc = $scope;

   sc.model = {};
   sc.model.value1 = null;

   $scope.button1 = function(){
      sc.model.value1 = 'abc';
   };

   sc.getInLineStyle = function(){
        sc.model.width = document.getElementById("div1").style.width;
   };

   sc.getClassStyle = function(){
        //get not inline sytle only can get the single style, cannot get the complex stype
        /*
          single style :  weith, length, width...
          complex style:  (object style)  border. background...
        */



        //sc.model.width2 = document.getElementById("div2").getComputedStyle.width;
        var oDiv2 = document.getElementById("div2");
        if(oDiv2.currentStyle){
          //IE
          sc.model.width2 = oDiv2.currentStyle.width;
        }else{
          //FF & Chrome
          //second para can be anything!
          sc.model.width2 = getComputedStyle(oDiv2, false ).width;
        }
   };

   sc.sortArray = function() {
      //sc.model.array = [2,3,1,10];
      sc.model.array = sc.model.array.split(',');
      sc.model.array.sort(function(n1, n2) {
          if (n1 < n2){
            return -1;
          }else if(n1 > n2){
            return 1;
          }
          return 0;
      });

      //can convert into below single form
      return n1-n2;

      //alert(sc.model.array);
   }

   sc.testCompare = function(){
     var a = 'abc';
     var b = 'bac';
     var c = 101;
     var d = 2;

     var e = '101';
     var f = '2';

     alert (b > a);
     alert (c > d);
     alert (e > f);
   }

});
