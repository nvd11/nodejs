  function button1(){
    //document.getElementById('skin').href="./css/style1.css";
    var a = {} ;
    var b= typeof(a);
    alert('type of a is ' + b);

    var a2 = function(){
        alert("abc");
    } ;
    //a2 = null;
    var b2= typeof(a2);
    alert('type of a2 is ' + b2);

  }


  function button2(){
    //document.getElementById('skin').href="./css/style1.css";
    var a;
    var b= typeof(a);
    alert('type of a is ' + b);
  }

  function button3(){
    var a = null;
    var b= typeof(a);
    alert('type of a is ' + b);
  }

  function button4(){
    var a = parseInt('a4');
    var b= typeof(a);
    alert('a is ' + a);
    alert('type of a is ' + b);
  }

function button5(){
  var a = '12';
  var b = '5';

  alert(a + b);
  alert(a - b);
  alert(a * b);
  alert(a / b);
}
