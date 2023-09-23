// NOT logical operator => ! or !!

/*
!true = false
!false = true
----------------
!!true = true
!!false = false
*/

let userAge = prompt("Enter your age", "");

if (!(userAge >= 14 && userAge <= 90)) {
  alert("You can not enter the site");
} else {
  alert("You can enter the site");
}
