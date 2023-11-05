// Anonymous function :

let users = [];

users.forEach(function () {
  alert("Hello");
});

// ///////////////////////////////////////////////////// //

// IIFE function : Immediately invoked function Expression :

/*
syntax :

( function () {
    // code
})();

    Or :

(() => {
  // code
})();
    
    Or :

(async () => {
  // code
})();

*/

(function () {
  alert("Hello world");
})();
