// OR symbol => ||

// alert(true || true );
// alert(false || true);
// alert(true || false);
// alert(false || false);

var num1 = 24;
var num2 = 4;
var num3 = 6;

var hour = 9;

if (hour < num1 || hour > num1) {
  alert("9 o'clock");
}

// "||" Finds the first truthy value

// result = value1 || value2 || value3 ;

alert(null || 1);

alert(null || 2 || 1);

var result = 0 || null || undefined;
alert(result);

var str = "" || "0";

alert(str);

// short-circuit
true || alert(9393844190);
false || alert("Sara");
