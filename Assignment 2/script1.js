/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define*/

var a = 4;
var b = 3;
var c = 5;
var greatestNum;

function greatestNum(a, b, c) {
   
    "use strict";
    

    
    if (a > b && a > c) {
        
        console.log("The greatest of the three number is A =" + a);
    } else if (b > a && b > c) {
        console.log("The greatest of the three number is B=" + b);
    } else if (c > a && c > b) {
        console.log("The greatest of three number is C=" + c);
    }

}

greatestNum(a, b, c);
