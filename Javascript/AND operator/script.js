// AND logical operator => &&

/*
 alert(true && true); => true
 alert(true && false); => false
 alert(false && true); => false
 alert(false && false); => false

*/

var num1 = 20;
var num2 = 4;
var num3 = 5;
var num4 = 25;

if (num1 < num2 && num1 > num2) {
  alert("20 greater than 4");
} else if (num3 ** 2 === num4 && num3 === num1) {
  alert("25 is equal 5 ** 2");
} else if (num2 * num3 === num1 && num3 ** 2 === num4 && num2 < num4) {
  alert("expression is truthy");
} else {
    alert("anything not true")
}
