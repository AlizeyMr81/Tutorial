// Nullish coalescing operator => "??"

/*
a ?? b :

a is defined => a
a is null/undefined => b

*/

let height = null;
let width = true;

let area = height ?? width;
alert(area);
