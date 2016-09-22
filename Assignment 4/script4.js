/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define*/
/*jshint -W088 */


var Emp = [ {name : "Sandeep", age : 29, store : "Vanheusen", city: "Bengaluru", pin : 560029 }, {name : "Rohit", age : 27, store : "PUMA", city: "Bengaluru", pin : 560079 }, {name : "Rishi", age : 26, store : "Nike", city: "Jaipur", pin : 302019 }, {name : "Ehsaas", age : 26, store : "H&M", city: "Bengaluru", pin : 560069 }, {name : "Mahendra", age : 39, store : "Reebok", city: "Churu", pin : 360029 }]; // Declaring Array of objects


var i;
function parseArray() {
                                             /* Function to parse objects in Array */
    
    "use strict";
    var x;
    for (i = 1; i <= Emp.length; i++) {
        for (x in Emp[i])
            {
               
                console.log("Employee" + i + " " + x + " : " + Emp[i][x]);
                console.log();
            }
    }
}


parseArray();