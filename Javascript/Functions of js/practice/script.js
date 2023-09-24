// Rewrite the function using '?' or '||'

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm("Did you permission from your parents??");
// }

// if (checkAge(prompt("How old are you??"))) {
//   alert("you can enter the site");
// } else {
//   alert("you can't enter the site");
// }

// ----------------------------------------------------------------------------------------------------

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function pow(x, n) {
    if (x >= 0 && n >= 0) {
      return true;
    }
  }
  
  let x = prompt("x?");
  let n = prompt("n?");
  
  if (pow(x, n)) {
    alert(x ** n);
  } else {
    alert("unknown");
  }
  