/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define*/


var radius = 3;   //Defining the radius variable
var area;         // Declaring the other 2 variable with values not defined
var circleArea;

function calcArea(radius) {    // Declaring the function to calaculate the area
    "use strict"; // prevents throwing more exceptions
    
   
    circleArea = 3.14 * radius * radius;
    
    return circleArea;
}

area = Math.round(calcArea(radius));  //Calling the function to calculate the area

console.log("The area of the circle is " + area);  //printing the area on the console



