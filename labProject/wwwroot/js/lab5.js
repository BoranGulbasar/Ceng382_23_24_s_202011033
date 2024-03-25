function HideElements(){


var element = document.getElementById("asd");


element.style.visibility = "hidden";


var element1 = document.querySelectorAll('input');

element1.forEach(function(element) {
    element.style.display = 'none';
  });


  var button = document.getElementById('bg');
  var showButtonText = "Show hidden elements";
  button.innerHTML = showButtonText;
  button.setAttribute('onclick', 'ShowElements()');
 
}


function ShowElements(){


var element = document.getElementById("asd");


element.style.visibility = "visible";

var element1 = document.querySelectorAll('input');

element1.forEach(function(element) {
    element.style.display = 'block';
  });
  var button = document.getElementById('bg');
  var showButtonText = "hide elements";
  button.innerHTML = showButtonText;
  button.setAttribute('onclick', 'HideElements()');



}
function addition(){

    var element1 = document.getElementById('cal');


    element1.style.display = 'block';
 
  

  var button = document.getElementById('add');
  var showButtonText = "hide Addition Form";
  button.innerHTML = showButtonText;
  button.setAttribute('onclick', 'visibleAdd()');
  

}

function visibleAdd(){
    var element = document.getElementById("cal");


element.style.display = "none";

var realSum = document.getElementById('answer')
    realSum.style.display = 'none';


  var button = document.getElementById('add');
  var showButtonText = "show Addition Form";
  button.innerHTML = showButtonText;
  button.setAttribute('onclick', 'addition()');



}
function calculate(){
    var fnum = parseInt(document.getElementById('number1').value);
    var snum = parseInt(document.getElementById('number2').value);

    var sum = fnum + snum;
    var realSum = document.getElementById('answer')
    realSum.style.display = 'block';
    document.getElementById('answer').innerHTML = "The sum of "+fnum+" and "+snum+" is: "+sum;

}