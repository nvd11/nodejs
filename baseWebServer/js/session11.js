var app = angular.module('myApp', ['ngMaterial']);
app.controller('myCtrl', function($scope, $interval) {

   var sc = $scope;

   sc.model = {};
   sc.model.value1 = null;

   var oUl = document.getElementById('ul1');
   sc.model.value1 = oUl.childNodes.length;

   for (var i =0; i < oUl.childNodes.length; i++){
     // if nodetype = 3, means text node
     // if nodetype = 1, means element node
    // alert(oUl.childNodes[i].nodeType);

    if (oUl.childNodes[i].nodeType == 1){
      oUl.childNodes[i].style.background = 'red';
    }
   }

   //children only includes element node
   for (var i=0; i < oUl.children.length; i++){
     oUl.children[i].style.background = 'blue';
   }
   //alert(oUl.childNodes.length);

   var oDiv2 = document.getElementById('div2');
   alert(oDiv2.offsetParent); //body node

   var oDiv4 = document.getElementById('div4');
   alert(oDiv4.offsetParent.id);//div3 node
});
