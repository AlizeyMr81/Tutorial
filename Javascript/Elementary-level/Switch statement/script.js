// Switch statement can replace multiple ( if ) checks.

/*
The syntax is :

switch (a) {

 case "value1" :
 ...
 break;

 case "value2" :
 ...
 break;

 default:
 ...
}
*/
///////////////////

let a = prompt("Enter your value","");

switch (a) {
    case "0" :
        alert("Zero");
        break;
    case "1" :
        alert("One");
        break;
    case 3 :
        alert("Never executes");
        break;
    default :
        alert("An unknown value");
}

//Grouping of "case"

let x = 3 ;

switch (x) {
    case 4 :
        alert("Hello");
        break;
    case 3 :
    case 5 :
        alert("Grouping case 3 and case 4");
        break;
    default :
        alert("Do you know who i am ?");
}
