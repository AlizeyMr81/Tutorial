// Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

// ucFirst("john") == "John";

// function ucFirst(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }

// alert(ucFirst("john"));

// --------------------------------------------------------------

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

// The function must be case-insensitive:

//  checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

// function checkSpam(str) {
//   if (str.search(/viagra/i) != -1 || str.search(/XXX/i) != -1) {
//     return "true";
//   } else {
//     return "false";
//   }
// }

// alert(checkSpam("buy ViAgRA now")); // true
// alert(checkSpam("free xxxxx")); // true
// alert(checkSpam("innocent rabbit")); // false

// -------------------------------------------------------------------------------

// Create a function truncate(str, maxlength) that checks the length of the str and,
// if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return str.slice(0, 19) + "...";
//   } else {
//     return str;
//   }
// }
// alert(truncate("What I'd like to tell on this topic is:",20));
// alert(truncate("Hi everyone!", 20) );

// ---------------------------------------------------------------------------------------

// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

function extractCurrencyValue(str) {
    return (+str.slice(1) === 120) ? "true" : "false"
}

alert( extractCurrencyValue("$120")); // true
